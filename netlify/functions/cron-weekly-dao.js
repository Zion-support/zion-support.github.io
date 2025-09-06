const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD
<<<<<<< HEAD

exports.handler = async function () {
=======
exports.handler = async function() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),
    const data = await resp.json(),

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),
    const content = fs.readFileSync(cachePath, 'utf-8'),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
};
=======
exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),
    const data = await resp.json(),

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),
    const content = fs.readFileSync(cachePath, 'utf-8'),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
