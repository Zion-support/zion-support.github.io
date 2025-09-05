<<<<<<< HEAD
const { upsertFile } = require('./_lib/github'),
=======
const {_upsertFile} = require('./_lib/github');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

async function fetchJson(_url, _token) {_const _resp = await fetch(url, _{
    headers: token ? { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' } : {}
<<<<<<< HEAD
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

    const byAuthor = {},
    const messages = [],
    for (const c of commits) {
      const author = c.commit?.author?.name || c.author?.login || 'unknown',
      byAuthor[author] = (byAuthor[author] || 0) + 1,
      messages.push({ sha: c.sha, message: c.commit?.message || '' })
=======
  });
  if (!resp.ok) throw new Error(`HTTP ${_resp.status}`);
  return resp.json();
}

exports.handler = async function() {_try {
    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;
    if (!owner || !repo || !token) {
      return { statusCode: 200, _body: JSON.stringify({ ok: true, _skipped: 'Missing GitHub envs'}) };
    }

    const _since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const _commitsUrl = `https://api.github.com/repos/${_owner}/${_repo}/commits?since=${_encodeURIComponent(since)}`;
    const _commits = await fetchJson(commitsUrl, token);

    const _byAuthor = {};
    const _messages = [];
    for (const c of commits) {_const _author = c.commit?.author?.name || c.author?.login || 'unknown';
      byAuthor[author] = (byAuthor[author] || 0) + 1;
      messages.push({ sha: c.sha, _message: c.commit?.message || ''});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    const _summary = {_updatedAt: Date.now(), _since, _totalCommits: commits.length, _authors: Object.entries(byAuthor).map(_([name, _count]) => ({ name, _count})).sort(_(a, _b) => b.count - a.count),
      messages
    },

<<<<<<< HEAD
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
    await upsertFile({_owner, _repo, _path: 'data/reports/changelog/weekly-changelog.json', _content: JSON.stringify(summary, _null, _2), _message: 'chore(automation): weekly changelog summary', _token});
    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _commits: commits.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},