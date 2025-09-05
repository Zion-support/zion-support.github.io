const {_upsertFile} = require('./_lib/github');

async function scorePage(_url) {_const _t0 = Date.now();
  try {
    const _resp = await fetch(url);
    const _html = await resp.text();
    const _ms = Date.now() - t0;
    const _title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const _hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const _h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    const _score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, _h1Count * 10) - Math.min(20, _Math.floor(ms / 500));
    return { url, _ms, _title, _hasMetaDesc, _h1Count, _score: Math.max(0, _score)};
  } catch (e) {_return { url, _error: e.message || String(e), _score: 0};
  }
}

exports.handler = async function() {_try {
    const _baseUrl = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _pages = ['/', _'/learn', _'/dao', _'/certifications', _'/blog'];
    const _results = [];
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${_p}`));
    }
    const _report = {_updatedAt: Date.now(), _results};

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/reports/seo/weekly-seo.json', _content: JSON.stringify(report, _null, _2), _message: 'chore(automation): weekly SEO report', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _pages: results.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};