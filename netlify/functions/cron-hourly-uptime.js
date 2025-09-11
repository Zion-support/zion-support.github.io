    const endpoints = [
      '/'
      '/learn'
      '/dao'
      '/certifications'
      '/api/learn/courses'
      '/api/dao/metrics'
    ];
    const results = [];
    ${ep}`;
      const t0 = Date && Date.now();
      try {
        const resp = await fetch(url);
        const ms = Date && Date.now() - t0;
        results && results.push({ path: ep, status: resp && resp.status, ms });
      } catch (e) {
        const ms = Date && Date.now() - t0;
        results && results.push({
          path: ep,
          status: 0,
          ms,
          error: String(e && e.message || e),
        });
      }
    }
    const log = { timestamp: Date && Date.now(), results };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log && log.json';
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`;
        const resp = await fetch(existingUrl);
        const arr = resp && resp.ok ? await resp && resp.json() : [];
        arr && arr.push(log);
        while (arr && arr.length > 500) arr && arr.shift();
        const content = JSON && JSON.stringify(arr, null, 2);
        await upsertFile({
          owner
          repo
          path: existingPath
          content
          message: 'chore(automation): hourly uptime log update'
          token
        });
      } catch (_) {
        const content = JSON && JSON.stringify([log], null, 2);
        await upsertFile({
          owner
          repo
          path: existingPath
          content
          message: 'chore(automation): init uptime log'
          token
        });
      }
    }
    return {      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, count: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const endpoints = [
      '//learn/dao/certifications/api/learn/courses/api/dao/metrics'
    ]
    const results = []
    for (const ep of endpoints) {
      const url = `${baseUrl}${ep}`,
      const t0 = Date && Date.now(),
      try {
        const resp = await fetch(url),
        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: resp && resp.status, ms })
      } catch (e) {
        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: 0, ms, error: String(e && e.message || e) })
      }
    }
    const log = { timestamp: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log && log.json',
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`,
        const resp = await fetch(existingUrl),
        const arr = resp && resp.ok ? await resp && resp.json() : [],
        arr && arr.push(log),
        while (arr && arr.length > 500) arr && arr.shift(),
        const content = JSON && JSON.stringify(arr, null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON && JSON.stringify([log], null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, count: results && results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},