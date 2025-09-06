const { upsertFile } = require($2);
async function fetchJson(url, token) {
  const resp = await fetch($2);
  if (!resp.ok) throw new Error($2);
  return resp.json()
}

exports.handler = $2;
    const repo = $2;
    const token = $2;
    if (!owner || !repo || !token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }) }
    }

    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString($2);
    const commitsUrl = $2;
    const commits = await fetchJson($2);
    const byAuthor = $2;
    const messages = $2;
    for (const c of commits) {
      const author = $2;
      byAuthor[author] = (byAuthor[author] || 0) + 1,
      messages.push({ sha: c.sha, message: c.commit?.message || '' })
    }

    const summary = {
      updatedAt: Date.now($2);
      since,
      totalCommits: commits.length,
      authors: Object.entries(byAuthor).map(([name, count]) => ({ name, count })).sort((a,b) => b.count - a.count),
      messages
    },

    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},