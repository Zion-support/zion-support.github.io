const { upsertFile } = require($2);
exports.handler = $2;
    const endpoints = $2;
    const results = $2;
    for (const ep of endpoints) {
      const url = $2;
      const t0 = Date.now($2);
      try {
        const resp = await fetch($2);
        const ms = $2;
        results.push({ path: ep, status: resp.status, ms })
      } catch (e) {
        const ms = $2;
        results.push({ path: ep, status: 0, ms, error: String(e.message || e) })
      }
    }

    const log = { timestamp: Date.now(), results },

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      const existingPath = $2;
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = $2;
        const resp = await fetch($2);
        const arr = $2;
        arr.push($2);
        while (arr.length > 500) arr.shift($2);
        const content = JSON.stringify($2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON.stringify($2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},