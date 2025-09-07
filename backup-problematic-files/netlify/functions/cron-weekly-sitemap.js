const { upsertFile } = require('./_lib/github');
exports.handler = async function () {
  try {
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;
    const pages = [
      '/
      '/about
      '/learn
      '/dao
      '/certifications
      '/blog
      '/services
      '/talent]
    ];
    const xml =

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }