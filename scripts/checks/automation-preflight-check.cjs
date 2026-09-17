#!/usr/bin/env node
/* automation:preflight — light workflow/repo hygiene checks.
 * Recreated 2026-09-17: package.json referenced this script but it was missing,
 * failing 'Workflow YAML sanity' and 'Workflow Change Guard'.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const wfDir = path.join(root, '.github', 'workflows');
let failures = [];

function fail(msg) { failures.push(msg); }

// 1) Workflows parse as UTF-8 and have name + on + jobs
const files = fs.existsSync(wfDir) ? fs.readdirSync(wfDir).filter(f => /\.ya?ml$/.test(f)) : [];
if (!files.length) fail('no workflow files found under .github/workflows');
for (const f of files) {
  const p = path.join(wfDir, f);
  let txt;
  try { txt = fs.readFileSync(p, 'utf8'); } catch (e) { fail(`${f}: unreadable (${e.message})`); continue; }
  if (!/^name:/m.test(txt)) fail(`${f}: missing 'name:'`);
  if (!/^("on"|on|'on'):/m.test(txt)) fail(`${f}: missing 'on:' trigger`);
  if (!/^jobs:/m.test(txt)) fail(`${f}: missing 'jobs:'`);
  // 2) Third-party actions must be pinned to a full 40-char commit SHA
  const uses = txt.match(/^\s*uses:\s*([^\s#]+)/gm) || [];
  for (const u of uses) {
    const ref = u.replace(/^\s*uses:\s*/, '').trim();
    if (ref.startsWith('./') || ref.startsWith('docker://')) continue;
    const [repo, ver] = ref.split('@');
    const isFirstParty = /^(actions|github)\//.test(repo);
    if (!ver) { fail(`${f}: unpinned action '${ref}'`); continue; }
    if (!isFirstParty && !/^[0-9a-f]{40}$/i.test(ver)) {
      fail(`${f}: third-party action '${repo}' pinned to '${ver}' — use full commit SHA`);
    }
  }
}

// 3) Repo hygiene guards from the war room hard rules
const cnamePath = path.join(root, 'CNAME');
if (fs.existsSync(cnamePath)) {
  const cname = fs.readFileSync(cnamePath, 'utf8').trim();
  if (cname && cname !== 'ziontechgroup.com' && cname !== 'www.ziontechgroup.com')
    fail(`CNAME points at '${cname}' — apex collisions are forbidden`);
}
if (fs.existsSync(path.join(root, 'public', 'CNAME'))) {
  const c = fs.readFileSync(path.join(root, 'public', 'CNAME'), 'utf8').trim();
  if (c && c !== 'ziontechgroup.com' && c !== 'www.ziontechgroup.com')
    fail(`public/CNAME points at '${c}' — apex collisions are forbidden`);
}

if (failures.length) {
  console.error('PREFLIGHT FAILURES:');
  for (const f of failures) console.error(' - ' + f);
  process.exit(1);
}
console.log(`preflight OK: ${files.length} workflows checked, hygiene guards passed.`);
