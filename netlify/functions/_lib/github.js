<<<<<<< HEAD
<<<<<<< HEAD
const GITHUB_API = 'https://api.github.com';

=======
const GITHUB_API = 'https: //api.github.com';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
async function getFile(owner, repo, path, token) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,
  const resp = await fetch(url, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json'
    }
  }),
  if (resp.status === 404) return null,
  if (!resp.ok) throw new Error(`GitHub getFile HTTP ${resp.status}`),
  return resp.json()
}

async function upsertFile({ owner, repo, path, content, message, token }) {
  if (!token || !owner || !repo) throw new Error('Missing GitHub credentials'),
  const existing = await getFile(owner, repo, path, token),
  const body = {
    message: message || `chore(automation): update ${path}`,
    content: Buffer.from(content).toString('base64')},
  if (existing?.sha) body.sha = existing.sha,
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+jsonContent-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }),
  if (!resp.ok) {
    const text = await resp.text(),
    throw new Error(`GitHub upsertFile HTTP ${resp.status}: ${text}`)
  }
  return resp.json()
}

<<<<<<< HEAD
module.exports = { upsertFile };
=======
const GITHUB_API = 'https: //api.github.com',
async function getFile(owner, repo, path, token) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,
  const resp = await fetch(url, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json'
    }
  }),
  if (resp.status === 404) return null,
  if (!resp.ok) throw new Error(`GitHub getFile HTTP ${resp.status}`),
  return resp.json()
}

async function upsertFile({ owner, repo, path, content, message, token }) {
  if (!token || !owner || !repo) throw new Error('Missing GitHub credentials'),
  const existing = await getFile(owner, repo, path, token),
  const body = {
    message: message || `chore(automation): update ${path}`,
    content: Buffer.from(content).toString('base64')},
  if (existing?.sha) body.sha = existing.sha,
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+jsonContent-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }),
  if (!resp.ok) {
    const text = await resp.text(),
    throw new Error(`GitHub upsertFile HTTP ${resp.status}: ${text}`)
  }
  return resp.json()
}

module.exports = { upsertFile },
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
module.exports = { upsertFile },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
