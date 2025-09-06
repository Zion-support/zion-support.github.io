<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js
=======
<<<<<<< HEAD:backup-problematic-files/netlify/functions/cron-weekly-deps.js
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-deps.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const { upsertFile } = require('./_lib/github');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
async function getLatest(pkg) {
  try {
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`);
    if (!resp.ok) return null;
    const json = await resp.json();

    return json.version |null;
  } catch (_) {
    return null;
  }
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
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
<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/cron-weekly-deps.js

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })
    }
<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/cron-weekly-deps.js
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js

}
<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
},
<<<<<<< HEAD
>>>>>>> main:netlify/functions/cron-weekly-deps.js
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======
<<<<<<< HEAD:netlify/functions/cron-weekly-deps.js

}
=======
>>>>>>> main:netlify/functions/cron-weekly-deps.js
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-deps.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85:backup-problematic-files/netlify/functions/cron-weekly-deps.js
