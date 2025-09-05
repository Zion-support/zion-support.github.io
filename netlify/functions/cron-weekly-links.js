const {_upsertFile} = require('./_lib/github');

async function fetchHtml(_url) {_const _resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.text();
}

function extractLinks(_html, _base) {_const _aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(_(m) => m[1]);
  const _links = aTags
    .filter(_(h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map(_(h) => (h.startsWith('http') ? h : `${base}${_h.startsWith('/') ? h : `/${h}`}`));
  return Array.from(new Set(links));
}

exports.handler = async function() {_try {
    const _base = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _pages = ['/', _'/learn', _'/dao', _'/certifications'];
    const _checked = [];
    const _broken = [];

    for (const p of pages) {
      try {
        const _html = await fetchHtml(`${base}${_p}`);
        const _links = extractLinks(html, base);
        for (const l of links.slice(0, 50)) {_try {
            const _resp = await fetch(l, _{ method: 'HEAD'});
            checked.push({_url: l, _status: resp.status});
            if (resp.status >= 400) broken.push({_url: l, _status: resp.status});
          } catch (e) {_broken.push({ url: l, _status: 0, _error: String(e.message || e)});
          }
        }
      } catch (e) {_broken.push({ url: `${base}${_p}`, status: 0, error: String(e.message || e) });
      }
    }

    const _report = {_updatedAt: Date.now(), _checked: checked.length, _broken};

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/reports/links/weekly-links.json', _content: JSON.stringify(report, _null, _2), _message: 'chore(automation): weekly link check', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _broken: broken.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};