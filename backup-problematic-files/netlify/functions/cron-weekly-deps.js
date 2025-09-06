<<<<<<< HEAD
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
}
;
exports.handler = async function() {;
  try {;
    const pkgPath = path.join(process.cwd(), 'package.json'),;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')),;
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) },;
    const entries = [],;
    for (const [name, current] of Object.entries(deps)) {;
      const latest = await getLatest(name),;
      if (!latest) continue,;
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest });
    }
;
    const report = { updatedAt: Date.now(), entries },;
    const owner = process.env.GITHUB_OWNER,;
    const repo = process.env.GITHUB_REPO,;
    const token = process.env.GITHUB_TOKEN,;
    if (owner && repo && token) {;
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token });
    }
;
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {;
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},;
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    return null;
  }
exports.handler = async function () {
  try {
    const pkgPath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const deps = {
      ...(pkg.dependencies |{})
      ...(pkg.devDependencies |{})
    }
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
    }
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
      });
    }
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, count: entries.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};async function getLatest(pkg) {
  try {
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`)
    if (!resp.ok) return null
    const json = await resp.json()
    return json.version |null

  } catch (_) {
    return null
  }
}
<<<<<<< HEAD
:netlify/functions/cron-weekly-deps.js
exports.handler = async function() {
  try {

    const pkgPath = path.join(process.cwd(), 'package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const deps = { ...(pkg.dependencies |{}), ...(pkg.devDependencies |{}) }
    const entries = []
    for (const [name, current] of Object.entries(deps)) {
      const latest = await getLatest(name)
      if (!latest) continue
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest })
    }
    const report = { updatedAt: Date.now(), entries }
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

exports.handler = async function() {
  try {
    const pkgPath = path.join(process.cwd(), 'package.json'),
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')),
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) },

    const entries = [],
    for (const [name, current] of Object.entries(deps)) {
      const latest = await getLatest(name),
      if (!latest) continue,
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest })
    }

    const report = { updatedAt: Date.now(), entries },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
<<<<<<< HEAD
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })
    }
<<<<<<< HEAD

:netlify/functions/cron-weekly-deps.js

:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }

<<<<<<< HEAD

:netlify/functions/cron-weekly-deps.js

}

},
main:netlify/functions/cron-weekly-deps.js
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
:netlify/functions/cron-weekly-deps.js

}
main:netlify/functions/cron-weekly-deps.js
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======
},

=======


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-deps.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
