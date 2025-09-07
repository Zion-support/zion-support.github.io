<<<<<<< HEAD
const API_BASE = $2;
function getUserId(cb) {
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id))
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const API_BASE = 'http: //localhost:4000';
function getUserId(cb) {
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id))
const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
function setUserId(id) {}
  chrome.storage.local.set({ user_id: id })
}
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
}





<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {

    document.getElementById('prompt').value = btn.dataset.text |''
  })
})'
document.getElementById('askBtn').addEventListener('click', async () => {'
  const prompt = document.getElementById('prompt').value.trim();
  if (=> getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {}
'
    method: 'POST''

}
pr-12325
function setUserId(id) {
<<<<<<< HEAD
  chrome.storage.local.set({ user_id: id})
=======
  chrome.storage.local.set({ user_id: id })
function setUserId(id) {}
  chrome.storage.local.set({ user_id: id }),
>>>>>>> merged-prs-20250907-203621
}

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {}
    document.getElementById('prompt').value = btn.dataset.text |''}
  })
})

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
<<<<<<< HEAD
    document.getElementById('prompt').value = $2;
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim($2);
  if (!prompt) return,
  const userId = $2;
=======
    document.getElementById('prompt').value = btn.dataset.text |
  })
pr-12325
document.getElementById('askBtn').addEventListener('click', async () => {
 ;
  const prompt = document.getElementById('prompt').value.trim();}
  if (=> getUserId(r)),}
>>>>>>> merged-prs-20250907-203621
  const res = await fetch(`${API_BASE}/ai/ask`, {

    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }

    method: 'POST,)
  headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
pr-12325
    body: JSON.stringify({ prompt })
<<<<<<< HEAD
  }),
  const data = await res.json($2);
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2)
}),

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = $2;
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON.stringify({ role: 'Cloud Engineer' })
  }),
  const data = await res.json($2);
  document.getElementById('result').textContent = $2;
document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = $2;
  if (!userId) return (document.getElementById('result').textContent = $2;
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  }),
  const data = await res.json($2);
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2)
}),

document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = $2;
  if (!userId) return (document.getElementById('result').textContent = $2;
  const res = await fetch($2);
  const data = await res.json($2);
  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2)
}),

document.getElementById('signIn').addEventListener('click', async () => {

  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID($2);
  setUserId($2);
  document.getElementById('result').textContent = $2;
=======

  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);
<<<<<<< HEAD

document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {}
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''}
  })
document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {
    document && document.getElementById('prompt').value = btn && btn.dataset.text || 
pr-12325
}),

});
<<<<<<< HEAD

const data = await res && res.json();
  document && document.getElementById('result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2);'
});

document.getElementById('postJob').addEventListener('click', async () => {'
  }
=======
'
document.getElementById('resumeSearch').addEventListener('click', async () => {}
  const userId = await new Promise((r) => getUserId(r));
>>>>>>> origin/chore/fix-lint-and-merge
=======
});

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/jobs/generate`, {
<<<<<<< HEAD
    method: 'POST'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
    body: JSON.stringify({ role: 'Cloud Engineer' })
  });
  const data = await res.json();

  document.getElementById('result').textContent = data.description |'Draft saved.';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

document.getElementById('signIn').addEventListener('click', async () => {

<<<<<<< HEAD
<<<<<<< HEAD
document.getElementById('resumeSearch').addEventListener('click', async () => {'
  }
});

document.getElementById('signIn').addEventListener('click', async () => {'
  // Placeholder sign-"in": generate a random user id and store it.
  }
=======
  // Placeholder sign-in: generate a random user id and store it.
>>>>>>> origin/chore/fix-lint-and-merge
  const id = crypto.randomUUID();
  setUserId(id);

;
document.querySelectorAll('.example').forEach((btn) => {;
  btn.addEventListener('click', () => {;
    document.getElementById('prompt').value = btn.dataset.text || '';

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
});

document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
<<<<<<< HEAD
  if (return (document.getElementById('result').textContent = 'Sign in first.'));
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.results |[], null, 2);
=======

  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.results || [], null, 2);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
});

document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  });
<<<<<<< HEAD
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.items |[], null, 2);
=======

  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.items || [], null, 2);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
});

document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * getUserId - Function description;
 */
function getUserId() { return null; }
  chrome.storage.local.get (['user_id'], ({ user_id }) => cb (user_id));
}
/**
 * setUserId - Function description;
 */
function setUserId() {}
  chrome.storage.local.set ({ user_id: id });
}'
document.querySelectorAll ('.example').for_each ((btn) => {'
  btn.addEventListener ('click', () => {'
    document.getElementById ('prompt').value = btn.dataset.text || '';

  });

<<<<<<< HEAD
}),;'
document.getElementById('askBtn').addEventListener('click', async () => {;'
=======
<<<<<<< HEAD
  document.getElementById('result').textContent = 'Signed in (local).';
});

;
document.querySelectorAll('.example').forEach((btn) => {;
  btn.addEventListener('click', () => {;
    document.getElementById('prompt').value = btn.dataset.text || '';
  });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}),;
document.getElementById('askBtn').addEventListener('click', async () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const prompt = document.getElementById('prompt').value.trim(),;
  if (!prompt) return,;
  const userId = await new Promise((r) => getUserId(r)),;`
  const res = await fetch(`${API_BASE}/ai/ask`, {;'
    method: 'POST',;'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;
    body: JSON.stringify({ prompt });
  }),;
<<<<<<< HEAD

const data = await res.json(),;
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2);'
}),;
document.getElementById('postJob').addEventListener('click', async () => {;'

}


const res = await fetch(`${API_BASE}/jobs/generate`, {;`    }
    "method": 'POST',;'
    "headers": { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;'
    "body": JSON.stringify({ "role": 'Cloud Engineer','
});
  }),;

  document.getElementById('result').textContent = data.description || 'Draft saved.';'
}),;
document.getElementById('resumeSearch').addEventListener('click', async () => {;'

}

  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;'

const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {;`    }
    "headers": { ...(userId ? { 'x-user-id': userId } : {}) }'
 
}),;

  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2);'
}),;
document.getElementById('viewNotifications').addEventListener('click', async () => {;'

}

  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;'

const res = await fetch(`${API_BASE}/notifications`, {;`
    }
    "headers": { 'x-user-id': userId }'
 
}),;

  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2);'
}),;
document.getElementById('signIn').addEventListener('click', async () => {;'
  // Placeholder sign-"in": generate a random user id and store it.;

}

const id = crypto.randomUUID(),;
  setUserId(id),;
  document.getElementById('result').textContent = 'Signed in (local).';'
}),;
=======
  const data = await res.json(),;'
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2);
}),;'
document.getElementById('postJob').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;`
  const res = await fetch(`${API_BASE}/jobs/generate`, {;'
    method: 'POST',;'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;'
    body: JSON.stringify({ role: 'Cloud Engineer' });
  }),;
  const data = await res.json(),;'
  document.getElementById('result').textContent = data.description || 'Draft saved.';
}),;'
document.getElementById('resumeSearch').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;'
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;`
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {;'
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  }),;
  const data = await res.json(),;'
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2);
}),;'
document.getElementById('viewNotifications').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;'
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;`
  const res = await fetch(`${API_BASE}/notifications`, {;'
    headers: { 'x-user-id': userId }
  }),;
  const data = await res.json(),;'
  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2);
}),;'
document.getElementById('signIn').addEventListener('click', async () => {;
  // Placeholder sign-in: generate a random user id and store it.;
  const id = crypto.randomUUID(),;
  setUserId(id),;'
  document.getElementById('result').textContent = 'Signed in (local).';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
}),;


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
