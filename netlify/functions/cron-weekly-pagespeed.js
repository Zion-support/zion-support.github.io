<<<<<<< HEAD
const { upsertFile } = require('./_lib/github'),

async function psi(url, strategy = 'mobile', key) {
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
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
const {_upsertFile} = require('./_lib/github');

async function psi(_url, _strategy = 'mobile', _key) {_const _endpoint = new window.URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', _url);
  endpoint.searchParams.set('strategy', _strategy);
  if (key) endpoint.searchParams.set('key', _key);
  const _resp = await fetch(endpoint.toString());
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`);
  return resp.json();
}

exports.handler = async function() {_try {
    const _baseUrl = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _key = process.env.PSI_API_KEY || '';
    const _pages = ['/', _'/learn', _'/dao', _'/certifications'];

    const _results = [];
    for (const p of pages) {
      const _url = `${baseUrl}${_p}`;
      try {_const _mobile = await psi(url, _'mobile', _key);
        const _desktop = await psi(url, _'desktop', _key);
        results.push({ url, _mobile, _desktop});
      } catch (e) {_results.push({ url, _error: e.message || String(e)});
      }
    }

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;
    const _content = JSON.stringify({_updatedAt: Date.now(), _results}, null, 2);

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/reports/performance/weekly-pagespeed.json', _content, _message: 'chore(automation): weekly PageSpeed report', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _pages: results.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},