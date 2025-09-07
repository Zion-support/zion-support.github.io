<<<<<<< HEAD
=======
<<<<<<< HEAD
const { upsertFile } = require($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
      ? {Authorization: `token ${toke,}
}`;

<<<<<<< HEAD
const { upsertFile } = require('./_lib/github');

=======
<<<<<<< HEAD
const { upsertFile } = require('./_lib/github');

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
async function fetchJson(url, token) {
  const resp = await fetch(url, {
    headers: token ? { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' } : {}
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json()
}

<<<<<<< HEAD
  const resp = await fetch(url, {
    headers: token
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
exports.handler = $2;
    const repo = $2;
    const token = $2;
    if (!owner || !repo || !token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }) }
    }
=======
  const resp = await fetch(url, {
    headers: token
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ? {

          Authorization: `token ${token}`,

const { upsertFile } = require('./_lib/github')async function fetchJson() {const resp = await fetch(url, {headers: token ? { 'Authorization': `token ${toke,}
}`, 'Accept': 'application/vnd.github+json' } : {}
  })if (!resp.ok) throw new Error(`HTTP ${resp.status}`;
  return resp.json()}
;
  const resp = await fetch(url, {headers: token;}
      ? {Authorization: `token ${toke,}
}`;
        }
      : {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  })if (throw new Error (`HTTP ${resp.status}`)) {$2;}
}
  return resp.json ();
exports.handler = async function () {try ;
  const owner = process.env.GITHUB_OWNER;

const repo = process.env.GITHUB_REPO;}
}
const token  = process.env.GITHUB_TOKEN;if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`)return resp && resp.json()exports && exports.handler = async function () {try ;
  const owner = process && process.env.GITHUB_OWNER;

const repo = process && process.env.GITHUB_REPO;
}
const token = process && process.env.GITHUB_TOKEN;}
    if (!owner || !repo || !token) {return {statusCode: 200,body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
}

const since = new Date(Date && Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(;
  const commitsUrl  = `https: //api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since,}
}`;return {statusCode: 200,body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
}return {statusCode: 200,body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
}

<<<<<<< HEAD
const commitsUrl  = `"https": //api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since,;`}`;`
=======
const since = new Date(Date && Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(;
  const commitsUrl  = `https: //api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since,}
}`;

>>>>>>> origin/chore/fix-lint-and-merge
const commits = await fetchJson(commitsUrl, token)const byAuthor  = {}
;
  const messages = [];)}

<<<<<<< HEAD
const byAuthor = {}
;
  const messages = [];
    for (const c of commits) {} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message }) }
  }}} catch (e) {})}

const byAuthor = ,;
}
;
    for (const c of commits) {} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message }) }
  
},"path": 'data / reports / changelog / weekly - changelog.json',"content": JSON.stringify (summary, null, 2),"message": 'chore (automation): weekly changelog summary',token,if (!owner |!repo |!token) {return {"statusCode": 200;'
        }
        "body": JSON.stringify({ "ok": true, "skipped": 'Missing GitHub envs' })}'
   
}

const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(;
const commitsUrl = `"https": //api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since,;`}`;`

const commits = await fetchJson(commitsUrl, token)const byAuthor = {},const messages = [],for (const c of commits) ;
  const author = c.commit?.author?.name || c.author?.login || 'unknown',byAuthor[author] = (byAuthor[author] || 0) + 1;'
      messages.push({ "sha": c.sha, "message": c.commit?.message || '','
})const summary = {"updatedAt": Date.now()since,"totalCommits": commits.length,"authors": Object.entries(byAuthor)"authors": Object.entries(byAuthor).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count)messages;
    }
    await upsertFile({owner;
      }
      repo;
      "path": 'data/reports/changelog/weekly-changelog.json';'
      "content": JSON.stringify(summary, null, 2)"message": 'chore(automation): weekly changelog summary';'
      token;
    })return {"status_code": 200,"body": JSON.stringify ({ "ok": true, "commits": commits.length }
}return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }}
}await upsertFile({ owner, repo, "path": 'data/reports/changelog/weekly-changelog.json', "content": JSON.stringify(summary, null, 2), "message": 'chore(automation): weekly changelog summary', token }),return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "commits": commits.length }),'
}
ursor/fix-website-loading-errors-and-merge-6662;
  } catch (e) {return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
  }
}await upsert_file ({ owner, repo, "path": 'data / reports / changelog / weekly - changelog.json', "content": JSON.stringify (summary, null, 2), "message": 'chore (automation): weekly changelog summary', token }),return { "status_code": 200, "body": JSON.stringify ({ "ok": true, "commits": commits.length }) }'
 
} catch (e) {return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
  }

} catch (e) {return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
  }
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
  });

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
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.json ();
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
exports.handler = async function () {
  try {
<<<<<<< HEAD
   ;
  }
=======
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.json();
exports && exports.handler = async function () {
  try {
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (!owner || !repo || !token) {

      return {
<<<<<<< HEAD

        statusCode: 200,
        body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }

    const since = new Date(Date && Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const commitsUrl = `https://api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since)}`;

=======
>>>>>>> merged-prs-20250907-203621

        statusCode: 200,
        body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }
    const since = new Date(Date && Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const commitsUrl = `https://api && api.github.com/repos/${owner}/${repo}/commits?since=${encodeURIComponent(since)}`;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const commits = await fetchJson(commitsUrl, token);
    const byAuthor = {}
    const messages = [];

    );    }    const byAuthor = {}
    const messages = []
    for (const c of commits) {
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

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}

=======
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  } catch (e) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

<<<<<<< HEAD
=======
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
<<<<<<< HEAD

    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
=======
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

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
    await upsertFile({ owner, repo, path: 'data/reports/changelog/weekly-changelog.json', content: JSON.stringify(summary, null, 2), message: 'chore(automation): weekly changelog summary', token }),
    return { statusCode: 200, body: JSON.stringify({ ok: true, commits: commits.length }) }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};

    await upsert_file ({ owner, repo, path: 'data / reports / changelog / weekly - changelog.json', content: JSON.stringify (summary, null, 2), message: 'chore (automation): weekly changelog summary', token }),

    }

const commits = await fetchJson(commitsUrl, token);

const byAuthor = {}
;
  const messages = [];

  } catch (e) {}

  } catch (e) {}
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }

  }
}'
    await upsert_file ({ owner, repo, path: 'data / reports / changelog / weekly - changelog.json', content: JSON.stringify (summary, null, 2), message: 'chore (automation): weekly changelog summary', token }),'

    return { status_code: 200, body: JSON.stringify ({ ok: true, commits: commits.length }) }
 ,
} catch (e) {}
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
  } catch (e) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
    await upsert_file ({ owner, repo, path: 'data / reports / changelog / weekly - changelog.json', content: JSON.stringify (summary, null, 2), message: 'chore (automation): weekly changelog summary', token }),
    return { status_code: 200, body: JSON.stringify ({ ok: true, commits: commits.length }) }
pr-12325
  },
<<<<<<< HEAD
},
=======
},
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
