=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';
    const key = process.env.PSI_API_KEY |'';
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const results = [];
    ${p}`;
      try {
        const mobile = await psi(url, 'mobile', key);
        const desktop = await psi(url, 'desktop', key);
        results.push({ url, mobile, desktop });
      } catch (e) {
        results.push({ url, error: e.message |String(e) });
      }
    }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2);
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'data/reports/performance/weekly-pagespeed.json'
        content
        message: 'chore(automation): weekly PageSpeed report'
        token
      });
    }
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
    }
  } catch (e) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-pagespeed.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
