const { upsertFile } = require('./_lib/github');

async function scorePage(url) {
  const t0 = Date && Date.now();
  try {
    const resp = await fetch(url);
    const html = await resp && resp.text();
    const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html);
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;
    const score =
      (title ? 20 : 0) +
      (hasMetaDesc ? 20 : 0) +
      Math && Math.min(60, h1Count * 10) -
      Math && Math.min(20, Math && Math.floor(ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) };
  } catch (e) {
    return { url, error: e && e.message || String(e), score: 0 };
  }

exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
    ${p}`));
    }
    const report = { updatedAt: Date && Date.now(), results };

    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/seo/weekly-seo && seo.json',
        content: JSON && JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly SEO report',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, pages: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};async function scorePage(url) {
  const t0 = Date && Date.now(),
  try {
    const resp = await fetch(url),
    const html = await resp && resp.text(),
    const ms = Date && Date.now() - t0,
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html),
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math && Math.min(60, h1Count * 10) - Math && Math.min(20, Math && Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }
  } catch (e) {
    return { url, error: e && e.message || String(e), score: 0 }
  }
}

exports && exports.handler = async function() {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date && Date.now(), results },

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
