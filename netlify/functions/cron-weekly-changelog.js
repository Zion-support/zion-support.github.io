
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ? {

          Authorization: `token ${token}`,

        }
      : {}
  });

<<<<<<< HEAD
<<<<<<< HEAD
const { upsert_file } = require ('./_lib / github');
;
  const resp = await fetch (url, {
    headers: token;
      ? {
          Authorization: `token ${token}`,
          Accept: 'application / vnd.github + json',
        }
      : {}
  });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.json ();
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
exports.handler = async function () {
  try {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.json();
exports && exports.handler = async function () {
  try {
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (!owner || !repo || !token) {
      return {
        statusCode: 200,
        body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }
    const since = new Date(Date && Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const commitsUrl = `https://api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since)}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const commits = await fetchJson(commitsUrl, token);
    const byAuthor = {}
    const messages = [];

    );    }    const byAuthor = {}
    const messages = []
    for (const c of commits) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  } catch (e) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

},

<<<<<<< HEAD
      const author = c && c.commit?.author?.name || c && c.author?.login || 'unknown',
      byAuthor[author] = (byAuthor[author] || 0) + 1,
      messages && messages.push({ sha: c && c.sha, message: c && c.commit?.message || '' })
    const summary = {
      updatedAt: Date && Date.now(),
      since,
      totalCommits: commits && commits.length,
      authors: Object && Object.entries(byAuthor)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
      messages
    }
    await upsertFile({
      owner
      repo
      path: 'data/reports/changelog/weekly-changelog.json'
      content: JSON.stringify(summary, null, 2)
      message: 'chore(automation): weekly changelog summary'
      token
    });
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, commits: commits.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
      return {
        status_code: 200,
        body: JSON.stringify ({ ok: true, skipped: 'Missing GitHub envs' }),
      }
    }
    const since = new Date (Date.now () - 7 * 24 * 60 * 60 * 1000).toISOString ();
    const commits_url = `https://api.github.com / repos/${owner}/${repo}/commits?since=${encodeURIComponent (since)}`;
    const commits = await fetch_json (commits_url, token);
;
    const by_author = {}
    const messages = []);    }    const by_author = {},
    const messages = [],
    for (const c of commits) {
      const author = c.commit?.author?.name || c.author?.login || 'unknown',
      by_author[author] = (by_author[author] || 0) + 1,
      messages.push ({ sha: c.sha, message: c.commit?.message || '' });
    const summary = {
      updated_at: Date.now (),
      since,
      total_commits: commits.length,
      authors: Object.entries (by_author);
        .map (([name, count]) => ({ name, count }));
        .sort ((a, b) => b.count - a.count),
      messages,
    }
;
    await upsert_file ({
      owner,
      repo,
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
    const byAuthor = {},
    const messages = [],
    for (const c of commits) {
      const author = c.commit?.author?.name || c.author?.login || 'unknown',
      byAuthor[author] = (byAuthor[author] || 0) + 1,
      messages.push({ sha: c.sha, message: c.commit?.message || '' })
    }
    const summary = {
      updatedAt: Date.now(),
      since,
      totalCommits: commits.length,
      authors: Object.entries(byAuthor).map(([name, count]) => ({ name, count })).sort((a,b) => b.count - a.count),
      messages
    },
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      path: 'data / reports / changelog / weekly - changelog.json',
      content: JSON.stringify (summary, null, 2),
      message: 'chore (automation): weekly changelog summary',
      token,
    });
    return {
      status_code: 200,
      body: JSON.stringify ({ ok: true, commits: commits.length }),
    }
=======

  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token })
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }

},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
=======
<<<<<<< HEAD
    await upsert_file ({ owner, repo, path: 'data / reports / changelog / weekly - changelog.json', content: JSON.stringify (summary, null, 2), message: 'chore (automation): weekly changelog summary', token }),
    return { status_code: 200, body: JSON.stringify ({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
},



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
