<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
const { upsertFile } = require('./_lib/github');
const fs = require('fs');
const path = require('path');
async function getLatest(pkg) {
  try {
<<<<<<< HEAD
=======
  // TODO: Implement
}
>>>>>>> merged-prs-20250907-203621
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`);
    if (!resp.ok) return null;
    const json = await resp.json();

    return json.version |null;
  } catch (_) {
    return null;
<<<<<<< HEAD
  }
exports.handler = async function () {
  try {
=======
exports.handler = async function () {
  // TODO: Implement
>>>>>>> merged-prs-20250907-203621
    const pkgPath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const deps = {
      ...(pkg.dependencies |{})
      ...(pkg.devDependencies |{})
<<<<<<< HEAD
    }
=======
>>>>>>> merged-prs-20250907-203621
    const entries = [];
    for (const [name, current] of Object.entries(deps)) {
      const latest = await getLatest(name);
      if (!latest) continue;
      entries.push({
<<<<<<< HEAD
        name
        current
        latest
        outOfDate: current.replace(/^[^0-9]*/, '') !== latest
      });
    }
=======
        name;
        current;
        latest;)
        outOfDate: current.replace(/^[^0-9]*/, ) !== latest;
      });
>>>>>>> merged-prs-20250907-203621
    const report = { updatedAt: Date.now(), entries }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
<<<<<<< HEAD
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
=======
        owner;
        repo;
        path: 'data/reports/deps/weekly-dependencies.json,)
  content: JSON.stringify(report, null, 2)
        message: 'chore(automation): weekly dependency insights
        token;
    return {
  // TODO: Implement
      statusCode: 200;,
  body: JSON.stringify({ ok: true, count: entries.length })
  } catch (e) {
<<<<<<< HEAD
    }
    return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
  }
};async function getLatest() {
>>>>>>> merged-prs-20250907-203621
  }
};async function getLatest(pkg) {
  try {
<<<<<<< HEAD
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`)
    if (!resp.ok) return null
    const json = await resp.json()
    return json.version |null

=======
    }
    const resp = await fetch(`"https"://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`)`
    if (!resp.ok) return null,
return json.version |null;
>>>>>>> merged-prs-20250907-203621
  } catch (_) {
    return null
  }
}
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
    const report = { updatedAt: Date.now(), entries }
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
=======
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
};async function getLatest(pkg) {
  // TODO: Implement
}`;
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`)
    const json = await resp.json()
>>>>>>> origin/chore/fix-lint-and-merge
=======

    const report = { updatedAt: Date.now(), entries },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
<<<<<<< HEAD
:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })
    }
<<<<<<< HEAD
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
<<<<<<< HEAD

:netlify/functions/cron-weekly-deps.js

:backup-problematic-files/netlify/functions/cron-weekly-deps.js
=======

<<<<<<< HEAD
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
