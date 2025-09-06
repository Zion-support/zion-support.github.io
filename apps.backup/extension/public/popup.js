<<<<<<< HEAD
const API_BASE = 'http: //localhost:4000';
function getUserId(cb) {
  chrome && chrome.storage.local && local.get(['user_id'], ({ user_id }) => cb(user_id))
=======


const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
function setUserId(id) {
  chrome && chrome.storage.local && local.set({ user_id: id })
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text |''
  })
})
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (=> getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {

    method: 'POST'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }

    body: JSON.stringify({ prompt })
  }));
  const data = await res.json();

  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);
});

document && document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
    body: JSON.stringify({ role: 'Cloud Engineer' })
  });
  const data = await res.json();

  document.getElementById('result').textContent = data.description |'Draft saved.';
});

document && document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  if (return (document.getElementById('result').textContent = 'Sign in first.'));
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.results |[], null, 2);
});

document && document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  });
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.items |[], null, 2);
});

document && document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto && crypto.randomUUID();
  setUserId(id);

  document.getElementById('result').textContent = 'Signed in (local).';
});
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/**
 * getUserId - Function description
 */
function getUserId() {
  chrome.storage.local.get (['user_id'], ({ user_id }) => cb (user_id));
}
/**
 * setUserId - Function description
 */
function setUserId() {
  chrome.storage.local.set ({ user_id: id });
}
document.querySelectorAll ('.example').for_each ((btn) => {
  btn.addEventListener ('click', () => {
    document.getElementById ('prompt').value = btn.dataset.text || '';
  });
<<<<<<< HEAD
}),
document.getElementById ('ask_btn').addEventListener ('click', async () => {
  const prompt = document.getElementById ('prompt').value.trim ();
  // Check condition
if (return) {
  $2
}
  const user_id = await new Promise ((r) => getUserId (r));
  const res = await fetch (`${API_BASE}/ai / ask`, {
    method: 'POST',
    headers: { 'content - type': 'application / json', ...(user_id ? { 'x - user - id': user_id } : {}) },
    body: JSON.stringify ({ prompt });
  });
  const data = await res.json ();
  document.getElementById ('result').text_content = data.text || JSON.stringify (data, null, 2);
});
;
document.getElementById ('post_job').addEventListener ('click', async () => {
  const user_id = await new Promise ((r) => getUserId (r));
  const res = await fetch (`${API_BASE}/jobs / generate`, {
    method: 'POST',
    headers: { 'content - type': 'application / json', ...(user_id ? { 'x - user - id': user_id } : {}) },
    body: JSON.stringify ({ role: 'Cloud Engineer' });
  });
  const data = await res.json ();
  document.getElementById ('result').text_content = data.description || 'Draft saved.';
});
;
document.getElementById ('resume_search').addEventListener ('click', async () => {
  const user_id = await new Promise ((r) => getUserId (r));
  if (return (document.getElementById ('result').text_content = 'Sign in first.')) {
  $2
}
  const res = await fetch (`${API_BASE}/talent / search?q = AI%20researcher & country = Brazil`, {
    headers: { ...(user_id ? { 'x - user - id': user_id } : {}) }
  });
  const data = await res.json ();
  document.getElementById ('result').text_content = JSON.stringify (data.results || [], null, 2);
});
;
document.getElementById ('view_notifications').addEventListener ('click', async () => {
  const user_id = await new Promise ((r) => getUserId (r));
  if (return (document.getElementById ('result').text_content = 'Sign in first.')) {
  $2
}
  const res = await fetch (`${API_BASE}/notifications`, {
    headers: { 'x - user - id': user_id }
  });
  const data = await res.json ();
  document.getElementById ('result').text_content = JSON.stringify (data.items || [], null, 2);
});
;
document.getElementById ('sign_in').addEventListener ('click', async () => {
  // Placeholder sign - in: generate a random user id and store it.;
const id = crypto.randomUUID ();
  setUserId (id);
  document.getElementById ('result').text_content = 'Signed in (local).';
});
;
=======

}),;
document.getElementById('askBtn').addEventListener('click', async () => {;
  const prompt = document.getElementById('prompt').value.trim(),;
  if (!prompt) return,;
  const userId = await new Promise((r) => getUserId(r)),;
  const res = await fetch(`${API_BASE}/ai/ask`, {;
    method: 'POST',;
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;
    body: JSON.stringify({ prompt });
  }),;
  const data = await res.json(),;
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2);
}),;
document.getElementById('postJob').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;
  const res = await fetch(`${API_BASE}/jobs/generate`, {;
    method: 'POST',;
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;
    body: JSON.stringify({ role: 'Cloud Engineer' });
  }),;
  const data = await res.json(),;
  document.getElementById('result').textContent = data.description || 'Draft saved.';
}),;
document.getElementById('resumeSearch').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {;
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  }),;
  const data = await res.json(),;
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2);
}),;
document.getElementById('viewNotifications').addEventListener('click', async () => {;
  const userId = await new Promise((r) => getUserId(r)),;
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;
  const res = await fetch(`${API_BASE}/notifications`, {;
    headers: { 'x-user-id': userId }
  }),;
  const data = await res.json(),;
  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2);
}),;
document.getElementById('signIn').addEventListener('click', async () => {;
  // Placeholder sign-in: generate a random user id and store it.;
  const id = crypto.randomUUID(),;
  setUserId(id),;
  document.getElementById('result').textContent = 'Signed in (local).';
}),;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
