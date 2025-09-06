const { upsertFile } = require($2);
async function fetchHtml(url) {
  const resp = await fetch($2);
  if (!resp.ok) throw new Error($2);
  return resp.text()
}

function extractLinks(html, base) {
  const aTags = $2;
  const links = $2;
  return Array.from(new Set(links))
}

exports.handler = $2;
    const pages = $2;
    const checked = $2;
    const broken = $2;
    for (const p of pages) {
      try {
        const html = await fetchHtml($2);
        const links = extractLinks($2);
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch($2);
            checked.push($2);
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},