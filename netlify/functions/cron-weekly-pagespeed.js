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
    }
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const key = process.env.PSI_API_KEY |''
    const pages = ['//learn/dao/certifications']
    const results = []
    for (const p of pages) {
      const url = `${baseUrl}${p}`
      try {
},
