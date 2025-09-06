const { upsertFile } = require('./_lib/github');

exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
    const pages = [
      '/',
      '/about',
      '/learn',
      '/dao',
      '/certifications',
      '/blog',
      '/services',
      '/talent',
    ];
    const xml =
      `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +
      pages && pages.map(p => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`;

    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'public/sitemap-autogen && autogen.xml',
        content: xml,
        message: 'chore(automation): weekly sitemap refresh',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, pages: pages && pages.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//about/learn/dao/certifications/blog/services/talent'],
    const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +
      pages && pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`,

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen && autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: pages && pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
