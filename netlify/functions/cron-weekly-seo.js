const { upsertFile } = require('./_lib/github');
async function scorePage(url) {
  const t0 = Date && Date.now();
  try {
    const resp = await fetch(url);
<<<<<<< HEAD
    const html = await resp.text();

    const ms = Date.now() - t0;
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |'';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length;
    const score =
      (title ? 20 : 0) +
      (hasMetaDesc ? 20 : 0) +
      Math.min(60, h1Count * 10) -
      Math.min(20, Math.floor(ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message |String(e), score: 0 }
  }
exports.handler = async function () {
  try {
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
    ${p}`));
    }
<<<<<<< HEAD
    const report = { updatedAt: Date.now(), results }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'data/reports/seo/weekly-seo.json'
        content: JSON.stringify(report, null, 2)
        message: 'chore(automation): weekly SEO report'
        token
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
    return {
<<<<<<< HEAD
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};async function scorePage(url) {
  const t0 = Date.now()
  try {
    const resp = await fetch(url)
    const html = await resp.text()
    const ms = Date.now() - t0
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |''
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html)
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500))

    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message |String(e), score: 0 }
  }
}
exports.handler = async function() {
  try {
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications/blog']
    const results = []
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }
<<<<<<< HEAD

    const report = { updatedAt: Date.now(), results }
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
=======
    const report = { updatedAt: Date && Date.now(), results },

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }
<<<<<<< HEAD
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
=======

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

}

