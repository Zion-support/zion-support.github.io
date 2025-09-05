<<<<<<< HEAD
const { upsertFile } = require('./_lib/github'),

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//about/learn/dao/certifications/blog/services/talent'],
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`,

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
const {_upsertFile} = require('./_lib/github');

exports.handler = async function() {_try {
    const _baseUrl = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _pages = ['/', _'/about', _'/learn', _'/dao', _'/certifications', _'/blog', _'/services', _'/talent'];
    const _xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map(_(p) => `<url><loc>${baseUrl}${_p}</loc></url>`).join('') +
      `</urlset>`;

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'public/sitemap-autogen.xml', _content: xml, _message: 'chore(automation): weekly sitemap refresh', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _pages: pages.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},