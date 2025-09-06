const { upsertFile } = require('./_lib/github');
const fs = require('fs');
const path = require('path');

async function getLatest(pkg) {
  try {
    const resp = await fetch(
      `https://registry && registry.npmjs.org/${encodeURIComponent(pkg)}/latest`
    );
    if (!resp && resp.ok) return null;
    const json = await resp && resp.json();
    return json && json.version || null;
  } catch (_) {
    return null;
  }

exports && exports.handler = async function () {
  try {
    const pkgPath = path && path.join(process && process.cwd(), 'package && package.json');
    const pkg = JSON && JSON.parse(fs && fs.readFileSync(pkgPath, 'utf-8'));
    const deps = {
      ...(pkg && pkg.dependencies || {}),
      ...(pkg && pkg.devDependencies || {}),
    };

    const entries = [];
    for (const [name, current] of Object && Object.entries(deps)) {
      const latest = await getLatest(name);
      if (!latest) continue;
      entries && entries.push({
        name,
        current,
        latest,
        outOfDate: current && current.replace(/^[^0-9]*/, '') !== latest,
      });
    }

    const report = { updatedAt: Date && Date.now(), entries };

    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/deps/weekly-dependencies && dependencies.json',
        content: JSON && JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly dependency insights',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, count: entries && entries.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};async function getLatest(pkg) {
  try {
    const resp = await fetch(`https://registry && registry.npmjs.org/${encodeURIComponent(pkg)}/latest`),
    if (!resp && resp.ok) return null,
    const json = await resp && resp.json(),
    return json && json.version || null
  } catch (_) {
    return null
  }
}

exports && exports.handler = async function() {
  try {
    const pkgPath = path && path.join(process && process.cwd(), 'package && package.json'),
    const pkg = JSON && JSON.parse(fs && fs.readFileSync(pkgPath, 'utf-8')),
    const deps = { ...(pkg && pkg.dependencies || {}), ...(pkg && pkg.devDependencies || {}) },

    const entries = [],
    for (const [name, current] of Object && Object.entries(deps)) {
      const latest = await getLatest(name),
      if (!latest) continue,
      entries && entries.push({ name, current, latest, outOfDate: current && current.replace(/^[^0-9]*/, '') !== latest })
    }

    const report = { updatedAt: Date && Date.now(), entries },

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies && dependencies.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, count: entries && entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
