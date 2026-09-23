#!/usr/bin/env node
/**
 * Reject self-redirect stubs and empty legal pages in public/ (or out/).
 * Used by prepare-pages-out.sh and Jest.
 */
const fs = require('fs');
const path = require('path');

const root = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.join(process.cwd(), 'public');

const REQUIRED = [
  { rel: 'privacy/index.html', mustInclude: ['Privacy Policy', 'kleber@ziontechgroup.com', 'We do not sell'] },
  { rel: 'terms/index.html', mustInclude: ['Terms of Service', 'Discovery', 'Delaware'] },
  { rel: 'privacidade/index.html', mustInclude: ['Privacidade', 'kleber@ziontechgroup.com'] },
  { rel: 'termos/index.html', mustInclude: ['Termos', 'Discovery'] },
  { rel: 'cookies/index.html', mustInclude: ['Cookie Policy', 'kleber@ziontechgroup.com'] },
  { rel: 'sla/index.html', mustInclude: ['Service level', 'contract'] },
];

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, acc);
    else if (name === 'index.html') acc.push(full);
  }
  return acc;
}

function extractTargets(html) {
  const targets = [];
  const patterns = [
    /location\.(?:href|replace)\s*=\s*['"]([^'"]+)['"]/gi,
    /location\.(?:href|replace)\(\s*['"]([^'"]+)['"]\s*\)/gi,
    /http-equiv=["']refresh["'][^>]*content=["'][^"']*url=([^"']+)["']/gi,
    /content=["'][^"']*url=([^"']+)["'][^>]*http-equiv=["']refresh["']/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html))) targets.push(m[1].trim());
  }
  return targets;
}

function normalizePath(raw, file) {
  let t = raw.split('#')[0].split('?')[0];
  if (t.startsWith('https://ziontechgroup.com')) {
    t = t.slice('https://ziontechgroup.com'.length) || '/';
  }
  if (!t.startsWith('/')) return null;
  if (!t.endsWith('/') && !path.posix.basename(t).includes('.')) t += '/';
  const relDir = path.relative(root, path.dirname(file)).split(path.sep).join('/');
  const route = relDir === '' || relDir === '.' ? '/' : `/${relDir}/`;
  return { target: t, route };
}

function main() {
  const errors = [];
  if (!fs.existsSync(root)) {
    console.error(`public-page-health: missing ${root}`);
    process.exit(1);
  }

  for (const spec of REQUIRED) {
    const full = path.join(root, spec.rel);
    if (!fs.existsSync(full)) {
      errors.push(`missing ${spec.rel}`);
      continue;
    }
    const html = fs.readFileSync(full, 'utf8');
    if (html.length < 1200) errors.push(`${spec.rel} is stub-sized (${html.length}B)`);
    if (/Redirecting\.\.\./i.test(html)) errors.push(`${spec.rel} still titled Redirecting`);
    for (const needle of spec.mustInclude) {
      if (!html.includes(needle)) errors.push(`${spec.rel} missing "${needle}"`);
    }
  }

  for (const file of walk(root)) {
    const html = fs.readFileSync(file, 'utf8');
    for (const raw of extractTargets(html)) {
      const norm = normalizePath(raw, file);
      if (!norm) continue;
      if (norm.target === norm.route) {
        const rel = path.relative(root, file).split(path.sep).join('/');
        errors.push(`self-redirect ${rel} -> ${raw}`);
      }
    }
  }

  if (errors.length) {
    console.error('public-page-health FAILED');
    for (const e of errors) console.error(` - ${e}`);
    process.exit(1);
  }
  console.log(`public-page-health OK root=${path.relative(process.cwd(), root) || root}`);
}

main();
