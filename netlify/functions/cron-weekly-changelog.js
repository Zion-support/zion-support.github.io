      ? {

          Authorization: `token ${token}`,

        }
      : {}
  });

  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.json ();
;


exports.handler = async function () {
  try {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

      return {
        statusCode: 200,
        body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }


    const commits = await fetchJson(commitsUrl, token);
    const byAuthor = {}
    const messages = [];


  } catch (e) {
  }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }


},

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


  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}


  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};
