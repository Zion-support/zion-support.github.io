<<<<<<< HEAD


=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;
    const key = process.env.PSI_API_KEY |;
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const results = [];`;
    ${p}`;
  // TODO: Implement
        const mobile = await psi(url, 'mobile', key);
        const desktop = await psi(url, 'desktop', key);
        results.push({ url, mobile, desktop });
      } catch (e) {
        results.push({ url, error: e.message |String(e) });
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2);
    if (owner && repo && token) {
      await upsertFile({
        owner;
        repo;
        path: 'data/reports/performance/weekly-pagespeed.json
        content;)
        message: 'chore(automation): weekly PageSpeed report
        token;
      });
    return {
<<<<<<< HEAD
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
    }
  } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  // TODO: Implement
      statusCode: 200;,
  body: JSON.stringify({ ok: true, pages: results.length })
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
<<<<<<< HEAD
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
