<<<<<<< HEAD


=======
:netlify/functions/cron-weekly-dao.js
:backup-problematic-files/netlify/functions/cron-weekly-dao.js
const fs = require('fs'),;
const path = require('path'),;
const { upsertFile } = require('./_lib/github'),;
exports.handler = async function() {;
  try {;
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',;
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),;
    const data = await resp.json(),;
    const owner = process.env.GITHUB_OWNER,;
    const repo = process.env.GITHUB_REPO,;
    const token = process.env.GITHUB_TOKEN,;
    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),;
    const content = fs.readFileSync(cachePath, 'utf-8'),;
    if (owner && repo && token) {;
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token });
    }
;
    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {;
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},;
:backup-problematic-files/netlify/functions/cron-weekly-dao.js
:backup-problematic-files/netlify/functions/cron-weekly-dao.js
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');
exports.handler = async function () {
  try {
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;
    const resp = await fetch(`${baseUrl}/api/dao/metrics`);
    const data = await resp.json();

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const cachePath = path.join(process.cwd(), 'data', 'dao', 'metrics.json');
    const content = fs.readFileSync(cachePath, 'utf-8');
    if (owner && repo && token) {
      await upsertFile({
        owner;
        repo;
        path: 'data/dao/metrics.json
        content;)
        message: 'chore(automation): weekly DAO metrics update
        token;
      });
    return {
  // TODO: Implement
      statusCode: 200;,
  body: JSON.stringify({ ok: true, updatedAt: data.updatedAt })
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
};  try {
  // TODO: Implement
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |`;
    const resp = await fetch(`${baseUrl}/api/dao/metrics`)
    const data = await resp.json()
    const cachePath = path.join(process.cwd(), 'datadaometrics.json')
    const content = fs.readFileSync(cachePath, 'utf-8')
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
<<<<<<< HEAD
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
