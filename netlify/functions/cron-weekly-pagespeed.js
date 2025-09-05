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
  }
};