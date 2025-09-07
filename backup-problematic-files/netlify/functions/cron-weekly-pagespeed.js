<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:netlify/functions/cron-weekly-pagespeed.js
:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
const { upsertFile } = require('./_lib/github'),;
async function psi(url, strategy = 'mobile', key) {;
  const endpoint = new URL('https: //www.googleapis.com/pagespeedonline/v5/runPagespeed'),;
  endpoint.searchParams.set('url', url),;
  endpoint.searchParams.set('strategy', strategy),;
  if (key) endpoint.searchParams.set('key', key),;
  const resp = await fetch(endpoint.toString()),;
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`),;
  return resp.json();
}
;
exports.handler = async function() {;
  try {;
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',;
    const key = process.env.PSI_API_KEY || '',;
    const pages = ['//learn/dao/certifications'],;
    const results = [],;
    for (const p of pages) {;
      const url = `${baseUrl}${p}`,;
      try {;
        const mobile = await psi(url, 'mobile', key),;
        const desktop = await psi(url, 'desktop', key),;
        results.push({ url, mobile, desktop });
      } catch (e) {;
        results.push({ url, error: e.message || String(e) });
      }
    }
;
    const owner = process.env.GITHUB_OWNER,;
    const repo = process.env.GITHUB_REPO,;
    const token = process.env.GITHUB_TOKEN,;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2),;
    if (owner && repo && token) {;
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token });
    }
;
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {;
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},;
:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
const { upsertFile } = require('./_lib/github');
async function psi(url, strategy = 'mobile', key) {
  const endpoint = new URL('https: //www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('strategy', strategy);
  if (key) endpoint.searchParams.set('key', key);
  const resp = await fetch(endpoint.toString());
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`);

  return resp.json();
exports.handler = async function () {
  try {
<<<<<<< HEAD
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';
    const key = process.env.PSI_API_KEY |'';
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const results = [];
    ${p}`;
      try {
=======
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;
    const key = process.env.PSI_API_KEY |;
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const results = [];`;
    ${p}`;
  // TODO: Implement
>>>>>>> merged-prs-20250907-203621
        const mobile = await psi(url, 'mobile', key);
        const desktop = await psi(url, 'desktop', key);
        results.push({ url, mobile, desktop });
      } catch (e) {
        results.push({ url, error: e.message |String(e) });
<<<<<<< HEAD
      }
    }
=======
>>>>>>> merged-prs-20250907-203621
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2);
    if (owner && repo && token) {
      await upsertFile({
<<<<<<< HEAD
        owner
        repo
        path: 'data/reports/performance/weekly-pagespeed.json'
        content
        message: 'chore(automation): weekly PageSpeed report'
        token
=======
        owner;
        repo;
        path: 'data/reports/performance/weekly-pagespeed.json
        content;)
        message: 'chore(automation): weekly PageSpeed report
        token;
>>>>>>> merged-prs-20250907-203621
      });
    return {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
    }
  } catch (e) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
:netlify/functions/cron-weekly-pagespeed.js
>>>>>>> merged-prs-20250907-203621
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};async function psi(url, strategy = 'mobile', key) {
  const endpoint = new URL('https: //www.googleapis.com/pagespeedonline/v5/runPagespeed')
  endpoint.searchParams.set('url', url)
  endpoint.searchParams.set('strategy', strategy)
  if (key) endpoint.searchParams.set('key', key)
  const resp = await fetch(endpoint.toString())
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`)

  return resp.json()
}
exports.handler = async function() {
  try {

    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const key = process.env.PSI_API_KEY |''
    const pages = ['//learn/dao/certifications']
    const results = []
    for (const p of pages) {
      const url = `${baseUrl}${p}`
      try {
        const mobile = await psi(url, 'mobile', key)
        const desktop = await psi(url, 'desktop', key)

        results.push({ url, mobile, desktop })
      } catch (e) {
        results.push({ url, error: e.message |String(e) })
      }
    }

    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2)

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }

}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function psi(url, strategy = 'mobile', key) {
  const endpoint = new URL('https: //www.googleapis.com/pagespeedonline/v5/runPagespeed'),
  endpoint.searchParams.set('url', url),
  endpoint.searchParams.set('strategy', strategy),
  if (key) endpoint.searchParams.set('key', key),
  const resp = await fetch(endpoint.toString()),
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`),
  return resp.json()
}

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const key = process.env.PSI_API_KEY || '',
    const pages = ['//learn/dao/certifications'],

    const results = [],
    for (const p of pages) {
      const url = `${baseUrl}${p}`,
      try {
        const mobile = await psi(url, 'mobile', key),
        const desktop = await psi(url, 'desktop', key),
        results.push({ url, mobile, desktop })
      } catch (e) {
        results.push({ url, error: e.message || String(e) })
      }
    }

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2),

    if (owner && repo && token) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
<<<<<<< HEAD
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD


main:netlify/functions/cron-weekly-pagespeed.js
:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
:netlify/functions/cron-weekly-pagespeed.js
main:netlify/functions/cron-weekly-pagespeed.js
:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
=======

=======


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
