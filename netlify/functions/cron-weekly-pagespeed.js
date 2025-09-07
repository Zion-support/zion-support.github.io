const { upsertFile } = require($2);
async function psi(url, strategy = 'mobile', key) {
  const endpoint = new URL($2);
  endpoint.searchParams.set($2);
  endpoint.searchParams.set($2);
  if (key) endpoint.searchParams.set($2);
  const resp = $2;
  if (!resp.ok) throw new Error($2);
  return resp.json()
}

exports.handler = $2;
    const key = $2;
    const pages = $2;
    const results = $2;
    for (const p of pages) {
      const url = $2;
      try {
        const mobile = await psi($2);
        const desktop = await psi($2);
        results.push({ url, mobile, desktop })
      } catch (e) {
        results.push({ url, error: e.message || String(e) })
      }
    }

    const owner = $2;
    const repo = $2;
    const token = $2;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},