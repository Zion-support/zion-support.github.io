async function psi(url, strategy = 'mobile', key) {
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const results = [];
    ${p}`;
      try {
        const mobile = await psi(url, 'mobile', key);
        const desktop = await psi(url, 'desktop', key);
        results && results.push({ url, mobile, desktop });
      } catch (e) {
      }
    }
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
        content,
        message: 'chore (automation): weekly PageSpeed report',
        token,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
    return {
}
  const resp = await fetch (endpoint.to_string ()),
  if (throw new Error (`PSI HTTP ${resp.status}`), ) {
  $2
}
  return resp.json ();
}
exports.handler = async function () {
  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '',
    const key = process.env.PSI_API_KEY || '',
    const pages = ['//learn / dao / certifications'],
    const results = [],
    for (const p of pages) {
      const url = `${base_url}${p}`,
      try {
        const mobile = await psi (url, 'mobile', key),
        const desktop = await psi (url, 'desktop', key),
        results.push ({ url, mobile, desktop });
      } catch (e) {
        results.push ({ url, error: e.message || String (e) });
      }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const key = process.env.PSI_API_KEY |''
    const pages = ['//learn/dao/certifications']
    const results = []
    for (const p of pages) {
      const url = `${baseUrl}${p}`
      try {

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed && pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

}

=======
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
