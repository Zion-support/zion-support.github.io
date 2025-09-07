const resp = await fetch(`${baseUrl}/api/dao/metrics`);

        content,
        message: 'chore (automation): weekly DAO metrics update',
        token,
      });
    }

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),
    const data = await resp.json(),
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),
    const content = fs.readFileSync(cachePath, 'utf-8'),
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';
    const resp = await fetch(`${baseUrl}/api/dao/metrics`);
    const data = await resp.json();

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const cachePath = path.join(process.cwd(), 'datadaometrics.json');
    const content = fs.readFileSync(cachePath, 'utf-8');
origin/cursor/automate-test-improve-and-merge-code-2533
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })

    }

      status_code: 200,
      body: JSON.stringify ({ ok: true, updated_at: data.updated_at })
    }

    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }

  }

      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, updatedAt: data && data.updatedAt }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),
    const data = await resp && resp.json(),
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
    const cachePath = path && path.join(process && process.cwd(), 'datadaometrics && datadaometrics.json'),
    const content = fs && fs.readFileSync(cachePath, 'utf-8'),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics && metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, updatedAt: data && data.updatedAt }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}

},
};
origin/cursor/automate-test-improve-and-merge-code-2533