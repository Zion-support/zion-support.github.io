const GITHUB_API = 'https://api.github.com';

async function getFile(_owner, _repo, _path, _token) {_const _url = `${GITHUB_API}/repos/${_owner}/${_repo}/contents/${_encodeURIComponent(path)}`;
  const _resp = await fetch(url, {_headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json'
    }
  });
  if (resp.status === 404) return null;
  if (!resp.ok) throw new Error(`GitHub getFile HTTP ${_resp.status}`);
  return resp.json();
}

async function upsertFile(_{_owner, _repo, _path, _content, _message, _token}) {_if (!token || !owner || !repo) throw new Error('Missing GitHub credentials');
  const _existing = await getFile(owner, _repo, _path, _token);
  const _body = {
    message: message || `chore(automation): update ${path}`,
    content: Buffer.from(content).toString('base64')};
  if (existing?.sha) body.sha = existing.sha;
  const _url = `${_GITHUB_API}/repos/${_owner}/${_repo}/contents/${_encodeURIComponent(path)}`;
  const _resp = await fetch(url, {_method: 'PUT', _headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {_const _text = await resp.text();
    throw new Error(`GitHub upsertFile HTTP ${resp.status}: ${_text}`);
  }
  return resp.json();
}

module.exports = {_upsertFile};