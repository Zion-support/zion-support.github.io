const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
async function scorePage(url) {
  const t0 = Date.now();
  try {
    const resp = await fetch(url);
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
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
    ${p}`));
    }
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
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }

<<<<<<< HEAD
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
<<<<<<< HEAD
=======
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    const report = { updatedAt: Date.now(), results }
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }

}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/seo/weekly-seo.json',
        content: JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly SEO report',
        token,
      });
    }

    return {
=======

=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
};async function scorePage(url) {
  const t0 = Date.now(),
  try {
    const resp = await fetch(url),
    const html = await resp.text(),
    const ms = Date.now() - t0,
    const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0 }
  }
}

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date.now(), results },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
