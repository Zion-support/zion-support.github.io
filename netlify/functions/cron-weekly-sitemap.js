const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD

exports.handler = async function () {
=======
<<<<<<< HEAD
<<<<<<< HEAD

exports.handler = async function () {
=======
exports.handler = async function() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '';
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
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map(p => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`;

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'public/sitemap-autogen.xml',
        content: xml,
        message: 'chore(automation): weekly sitemap refresh',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: pages.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
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
  }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
