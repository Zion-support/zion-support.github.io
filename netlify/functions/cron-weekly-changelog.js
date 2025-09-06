const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
async function fetchJson(url, token) {
  const resp = await fetch(url, {
    headers: token
      ? {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github+json',
        }
      : {},
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();

exports.handler = async function () {
  try {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    if (!owner || !repo || !token) {
      return {
        statusCode: 200,
        body: JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }

    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since)}`;
    const commits = await fetchJson(commitsUrl, token);

<<<<<<< HEAD
    const byAuthor = {};
    const messages = [];
    );    }
=======
<<<<<<< HEAD
    const byAuthor = {};
    const messages = [];
    );
=======
async function fetchJson(url, token) {
  const resp = await fetch(url, {
    headers: token ? { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' } : {}
  }),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.json()
}

exports.handler = async function() {
  try {
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    if (!owner || !repo || !token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }) }
    }

    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since)}`,
    const commits = await fetchJson(commitsUrl, token),

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const byAuthor = {},
    const messages = [],
    for (const c of commits) {
      const author = c.commit?.author?.name || c.author?.login || 'unknown',
      byAuthor[author] = (byAuthor[author] || 0) + 1,
      messages.push({ sha: c.sha, message: c.commit?.message || '' })
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const summary = {
      updatedAt: Date.now(),
      since,
      totalCommits: commits.length,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      authors: Object.entries(byAuthor)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
      messages,
    };
<<<<<<< HEAD
=======
=======
      authors: Object.entries(byAuthor).map(([name, count]) => ({ name, count })).sort((a,b) => b.count - a.count),
      messages
    },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    await upsertFile({
      owner,
      repo,
      path: 'data/reports/changelog/weekly-changelog.json',
      content: JSON.stringify(summary, null, 2),
      message: 'chore(automation): weekly changelog summary',
      token,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, commits: commits.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
      authors: Object.entries(byAuthor).map(([name, count]) => ({ name, count })).sort((a,b) => b.count - a.count),
      messages
    },

    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
