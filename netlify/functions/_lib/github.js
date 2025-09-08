



  });
  if (resp && resp.status === 404) return null;`

  if (!resp && resp.ok) throw new Error(`GitHub getFile HTTP ${resp && resp.status}`);
  return resp && resp.json();



    headers: {

      'Authorization': `token ${token}`
      'Accept': 'application/vnd.github+json'

async function upsertFile({ owner, repo, path, content, message, token }) {



module.exports = { upsertFile },

}
}


