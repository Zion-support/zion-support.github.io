<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

function getUserId(cb) {
  chrome && chrome.storage.local && local.get(['user_id'], ({ user_id }) => cb(user_id))
}
=======
=======
=======
const API_BASE = 'http: //localhost:4000',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const API_BASE = 'http: //localhost:4000',
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
function getUserId(cb) {
  chrome && chrome.storage.local && local.get(['user_id'], ({ user_id }) => cb(user_id))
}
function setUserId(id) {
  chrome && chrome.storage.local && local.set({ user_id: id })
}
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text |''
  })
<<<<<<< HEAD
<<<<<<< HEAD

document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''
  })

}),

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
});
origin/cursor/automate-test-improve-and-merge-code-2533
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim(),
  if (!prompt) return,
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON.stringify({ prompt })
  }),
  const data = await res.json(),
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2)
}),

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON.stringify({ role: 'Cloud Engineer' })
  });
  const data = await res.json();
origin/cursor/automate-test-improve-and-merge-code-2533
  document.getElementById('result').textContent = data.description || 'Draft saved.'
}),

document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  }),
  const data = await res.json(),
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2)
}),

document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  }),
  const data = await res.json(),
  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2)
}),

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
document && document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document && document.getElementById('prompt').value && value.trim(),
  if (!prompt) return,
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ prompt })
  }),
  const data = await res && res.json(),
  document && document.getElementById('result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2)
}),

document && document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ role: 'Cloud Engineer' })
  }),
  const data = await res && res.json(),
  document && document.getElementById('result').textContent = data && data.description || 'Draft saved.'
}),

document && document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  }),
  const data = await res && res.json(),
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.results || [], null, 2)
}),

document && document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  }),
  const data = await res && res.json(),
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.items || [], null, 2)
}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const id = crypto.randomUUID(),
  setUserId(id),
  document.getElementById('result').textContent = 'Signed in (local).';
}),
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);
  document.getElementById('result').textContent = 'Signed in (local).'
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
