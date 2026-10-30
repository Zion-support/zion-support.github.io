#!/usr/bin/env node
'use strict';

// Opt-in prerequisite diagnosis only. This does not run lint, modify files,
// install dependencies, or replace any existing CI gate.
// Usage: node scripts/checks/autonomous-eslint-preflight.cjs [repository-root]
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

function pluginPackage(name) {
  if (name.startsWith('@')) {
    const [scope, plugin] = name.split('/');
    return plugin ? `${scope}/${plugin.startsWith('eslint-plugin') ? plugin : `eslint-plugin-${plugin}`}` : `${scope}/eslint-plugin`;
  }
  return name.startsWith('eslint-plugin-') ? name : `eslint-plugin-${name}`;
}

function extensionPackage(name) {
  if (name.startsWith('eslint:')) return null;
  if (name.startsWith('plugin:')) return pluginPackage(name.slice(7, name.lastIndexOf('/')));
  if (name.startsWith('.') || path.isAbsolute(name)) return name;
  const parts = name.split('/');
  const index = name.startsWith('@') ? 1 : 0;
  if (!parts[index]) parts[index] = 'eslint-config';
  else if (!parts[index].startsWith('eslint-config')) parts[index] = `eslint-config-${parts[index]}`;
  return parts.join('/');
}

function inspect(repositoryRoot) {
  const root = path.resolve(repositoryRoot);
  const configPath = path.join(root, '.eslintrc-autonomous.cjs');
  const report = { config: '.eslintrc-autonomous.cjs', lintExecuted: false, scope: 'Prerequisites only; a clean report is not a lint pass.', errors: [], resolvedModules: [] };
  const add = (code, detail) => report.errors.push({ code, detail });
  let manifest;
  try { manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')); }
  catch (error) { add('MANIFEST_UNREADABLE', error.message); return report; }
  const rootRequire = createRequire(path.join(root, 'package.json'));
  report.declaredEslint = manifest.devDependencies?.eslint ?? manifest.dependencies?.eslint ?? null;
  try { report.installedEslint = rootRequire('eslint/package.json').version; }
  catch { add('ESLINT_NOT_INSTALLED', 'The repository cannot resolve eslint/package.json. Install its locked dependencies before lint validation.'); }
  let config;
  try { config = rootRequire(configPath); }
  catch (error) { add('CONFIG_LOAD_FAILED', error.message); return report; }
  const entries = Array.isArray(config) ? config : [config];
  if (entries.some(entry => !entry || typeof entry !== 'object')) {
    add('CONFIG_SHAPE_INVALID', 'Expected a configuration object or array of objects.');
    return report;
  }
  const legacyKeys = ['root', 'extends', 'env', 'parser', 'parserOptions', 'overrides', 'ignorePatterns'];
  report.legacyKeys = Array.isArray(config) ? [] : legacyKeys.filter(key => Object.hasOwn(config, key));
  if (!Array.isArray(config) && Array.isArray(config.plugins)) report.legacyKeys.push('plugins (array)');
  const declaredMajor = /^[~^]?(\d+)\./.exec(report.declaredEslint ?? '');
  const major = report.installedEslint ? Number(report.installedEslint.split('.')[0]) : declaredMajor ? Number(declaredMajor[1]) : null;
  if (major >= 10 && report.legacyKeys.length) add('LEGACY_CONFIG_UNSUPPORTED', `ESLint ${major} does not support the legacy keys: ${report.legacyKeys.join(', ')}.`);
  const modules = new Set();
  const localRules = new Set();
  function visit(entry) {
    if (!entry || typeof entry !== 'object') return;
    for (const name of Array.isArray(entry.plugins) ? entry.plugins : []) modules.add(pluginPackage(name));
    for (const name of typeof entry.extends === 'string' ? [entry.extends] : Array.isArray(entry.extends) ? entry.extends : []) {
      const specifier = extensionPackage(name);
      if (specifier) modules.add(specifier);
    }
    for (const name of ['no-inner-html', 'require-async-try-catch']) {
      const setting = entry.rules?.[name];
      const severity = Array.isArray(setting) ? setting[0] : setting;
      if (severity !== undefined && severity !== 0 && severity !== 'off') localRules.add(name);
    }
    for (const override of entry.overrides ?? []) visit(override);
  }
  entries.forEach(visit);
  for (const specifier of modules) {
    try { rootRequire.resolve(specifier); report.resolvedModules.push(specifier); }
    catch { add('MODULE_UNRESOLVED', specifier); }
  }
  if (localRules.size) {
    let directoryExists = false;
    try { directoryExists = fs.statSync(path.join(root, 'eslint-rules')).isDirectory(); } catch {}
    if (!directoryExists) add('LOCAL_RULE_DIRECTORY_MISSING', `Enabled rules ${[...localRules].join(', ')} reference the documented eslint-rules directory, which is absent. Recover and validate their implementations; do not disable them.`);
    report.localRuleImplementationValidated = false;
  }
  return report;
}

function main(args, writeOut, writeError) {
  if (args.length > 1) { writeError('Usage: node autonomous-eslint-preflight.cjs [repository-root]\n'); return 2; }
  const report = inspect(args[0] ?? process.cwd());
  writeOut(`${JSON.stringify(report, null, 2)}\n`);
  return report.errors.length ? 1 : 0;
}
if (require.main === module) process.exitCode = main(process.argv.slice(2), text => process.stdout.write(text), text => process.stderr.write(text));
module.exports = { inspect, main };
