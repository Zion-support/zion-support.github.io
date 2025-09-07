const { upsertFile } = require($2);
async function scorePage(url) {
  const t0 = Date.now($2);
  try {
    const resp = await fetch($2);
    const html = await resp.text($2);
    const ms = $2;
    const title = $2;
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test($2);
    const h1Count = $2;
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0}
  }
}

exports.handler = $2;
    const pages = $2;
    const results = $2;
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date.now(), results },

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},