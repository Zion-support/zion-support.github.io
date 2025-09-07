:netlify/functions/cron-weekly-deps.js
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
const { upsertFile } = require('./_lib/github'),;
const fs = require('fs'),;
const path = require('path'),;
async function getLatest(pkg) {;
  try {;
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`),;
    if (!resp.ok) return null,;
    const json = await resp.json(),;
    return json.version || null;
  } catch (_) {;
    return null;
  }
;
exports.handler = async function() {;
    const pkgPath = path.join(process.cwd(), 'package.json'),;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')),;
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) },;
    const entries = [],;
    for (const [name, current] of Object.entries(deps)) {;
      const latest = await getLatest(name),;
      if (!latest) continue,;
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest });
    const report = { updatedAt: Date.now(), entries },;
    const owner = process.env.GITHUB_OWNER,;
    const repo = process.env.GITHUB_REPO,;
    const token = process.env.GITHUB_TOKEN,;
    if (owner && repo && token) {;
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token });
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {;
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
},;
const { upsertFile } = require('./_lib/github');
const fs = require('fs');
const path = require('path');
async function getLatest(pkg) {
  try {
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`);
    if (!resp.ok) return null;
    const json = await resp.json();

    return json.version |null;
  } catch (_) {
exports.handler = async function () {
    const pkgPath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const deps = {
      ...(pkg.dependencies |{})
      ...(pkg.devDependencies |{})
    const entries = [];
    for (const [name, current] of Object.entries(deps)) {
      const latest = await getLatest(name);
      if (!latest) continue;
      entries.push({
        name
        current
        latest
        outOfDate: current.replace(/^[^0-9]*/, '') !== latest
      });
    const report = { updatedAt: Date.now(), entries }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'data/reports/deps/weekly-dependencies.json'
        content: JSON.stringify(report, null, 2)
        message: 'chore(automation): weekly dependency insights'
        token
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, count: entries.length })
  } catch (e) {
};async function getLatest(pkg) {
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`)
    if (!resp.ok) return null
    const json = await resp.json()
    return json.version |null

    return null
exports.handler = async function() {

    const pkgPath = path.join(process.cwd(), 'package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const deps = { ...(pkg.dependencies |{}), ...(pkg.devDependencies |{}) }
    const entries = []
      const latest = await getLatest(name)
      if (!latest) continue
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest })
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN

    const pkgPath = path.join(process.cwd(), 'package.json'),
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')),
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) },

    const entries = [],
      const latest = await getLatest(name),
      if (!latest) continue,

    const report = { updatedAt: Date.now(), entries },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })

},
main:netlify/functions/cron-weekly-deps.js
