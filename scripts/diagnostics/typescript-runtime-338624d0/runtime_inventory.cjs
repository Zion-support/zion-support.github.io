'use strict';
// CI-only: source bytes are hashed locally, never emitted or persisted.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

function summarize(source) {
  source = fs.realpathSync(source);
  const ts = require(path.join(source, 'node_modules/typescript'));
  if (ts.version !== '5.9.3') throw new Error('compiler_contract');
  const configPath = path.join(source, 'tsconfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (config.extends || config.references) throw new Error('config_contract');
  const parsed = ts.parseJsonConfigFileContent(config, {
    ...ts.sys,
    readFile(name) {
      if (path.resolve(name) !== configPath) throw new Error('config_contract');
      return fs.readFileSync(name, 'utf8');
    },
  }, source);
  if (parsed.errors.length) throw new Error('config_diagnostics');
  const relative = parsed.fileNames.map(name => path.relative(source, name).split(path.sep).join('/'));
  const names = [...relative].sort();
  const digest = data => crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
  const contents = crypto.createHash('sha256');
  let bytes = 0;
  const counts = {ts: 0, tsx: 0, d_ts: 0, other: 0};
  for (const relativeName of names) {
    const filename = path.resolve(source, relativeName);
    const real = fs.realpathSync(filename);
    if (!real.startsWith(source + path.sep)) throw new Error('external_root');
    const body = fs.readFileSync(filename);
    contents.update(relativeName + '\0'); contents.update(body); contents.update('\0');
    bytes += body.length;
    if (relativeName.endsWith('.d.ts')) counts.d_ts++;
    else if (relativeName.endsWith('.tsx')) counts.tsx++;
    else if (relativeName.endsWith('.ts')) counts.ts++;
    else counts.other++;
  }
  return {
    counts_as_required_gate: false, full_program_verified: false,
    inventory_kind: 'filesystem_initial_roots', compiler_version: ts.version,
    root_count: names.length, root_counts: counts, root_bytes: bytes,
    generated_next_roots: names.filter(name => name.startsWith('.next/')).length,
    root_set_sha256: digest(names), root_order_sha256: digest(relative),
    root_content_sha256: contents.digest('hex'),
  };
}

if (require.main === module) {
  try {
    process.stdout.write(JSON.stringify(summarize(process.argv[2])) + '\n');
  } catch (_) {
    // Never emit an exception/stack/source path.
    process.stdout.write('{"inventory_failed":true,"counts_as_required_gate":false}\n');
    process.exitCode = 1;
  }
}
module.exports = {summarize};
