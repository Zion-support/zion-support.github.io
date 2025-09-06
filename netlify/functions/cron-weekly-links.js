const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
async function fetchHtml(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
<<<<<<< HEAD
=======
  return resp.text();
function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(
    m => m[1]
  );
  const links = aTags
    .filter(h => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map(h =>
      h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`
    );
  return Array.from(new Set(links));
exports.handler = async function () {
  try {
    const base = process.env.URL |process.env.DEPLOY_URL |'';
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const checked = [];
    const broken = [];
    ${p}`);
        const links = extractLinks(html, base);
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' });
            checked.push({ url: l, status: resp.status });
            if (resp.status >= 400)
              broken.push({ url: l, status: resp.status });
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message |e) });
          }
        }
      } catch (e) {
        broken.push({
          url: `${base}${p}`
          status: 0
          error: String(e.message |e)
        });
      }
    }
    const report = { updatedAt: Date.now(), checked: checked.length, broken }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'data/reports/links/weekly-links.json'
        content: JSON.stringify(report, null, 2)
        message: 'chore(automation): weekly link check'
        token
      });
    }
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, broken: broken.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
};async function fetchHtml(url) {
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return resp.text()
}
function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1])
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`))
  return Array.from(new Set(links))
}
exports.handler = async function() {
  try {
<<<<<<< HEAD
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'];
    const checked = [];
    const broken = [];
    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`);
        const links = extractLinks(html, base);
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' });
            checked.push({ url: l, status: resp.status });
            if (} catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
=======
    const base = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications']
    const checked = []
    const broken = []
    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`)
        const links = extractLinks(html, base)
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' })
            checked.push({ url: l, status: resp.status })
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message |e) })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message |e) })
      }
    }
<<<<<<< HEAD

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER);
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN);
=======
    const report = { updatedAt: Date.now(), checked: checked.length, broken }
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
