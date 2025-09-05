const {_upsertFile} = require('./_lib/github');

async function fetchJson(_url, _token) {_const _resp = await fetch(url, _{
    headers: token ? { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' } : {}
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
    }

    const _summary = {_updatedAt: Date.now(), _since, _totalCommits: commits.length, _authors: Object.entries(byAuthor).map(_([name, _count]) => ({ name, _count})).sort(_(a, _b) => b.count - a.count),
      messages
    };

    await upsertFile({_owner, _repo, _path: 'data/reports/changelog/weekly-changelog.json', _content: JSON.stringify(summary, _null, _2), _message: 'chore(automation): weekly changelog summary', _token});
    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _commits: commits.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};