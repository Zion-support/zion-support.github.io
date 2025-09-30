<<<<<<< HEAD
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
=======


>>>>>>> main
const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');



      });
    return {

  // TODO: Implement
      statusCode: 200;,
  body: JSON.stringify({ ok: true, updatedAt: data.updatedAt })
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
};  try {

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }

  }




<<<<<<< HEAD
=======
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
      });
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, updatedAt: data.updatedAt })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};  try {
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const resp = await fetch(`${baseUrl}/api/dao/metrics`)
    const data = await resp.json()
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
    const cachePath = path.join(process.cwd(), 'datadaometrics.json')
    const content = fs.readFileSync(cachePath, 'utf-8')

}
const resp = await fetch(`${baseUrl}/api/dao/metrics`);`
const data = await resp.json();
const cachePath = path.join(process.cwd(), 'datadaometrics.json');'

  // TODO: Implement
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |`;
    const resp = await fetch(`${baseUrl}/api/dao/metrics`)
    const data = await resp.json()
    const cachePath = path.join(process.cwd(), 'datadaometrics.json')
    const content = fs.readFileSync(cachePath, 'utf-8')
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

:netlify/functions/cron-weekly-dao.js

:backup-problematic-files/netlify/functions/cron-weekly-dao.js
    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }

  }


:netlify/functions/cron-weekly-dao.js

}

},
main:netlify/functions/cron-weekly-dao.js
:backup-problematic-files/netlify/functions/cron-weekly-dao.js
:netlify/functions/cron-weekly-dao.js
main:netlify/functions/cron-weekly-dao.js
:backup-problematic-files/netlify/functions/cron-weekly-dao.js
=======
>>>>>>> main
