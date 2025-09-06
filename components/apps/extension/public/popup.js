<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const API_BASE = 'http: //localhost:4000',
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000'
=======
const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

function getUserId(cb) {
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id))
}
<<<<<<< HEAD
function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
}
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text |''
  })
=======

function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
}

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text || ''
  })
}),

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
  }),
  const data = await res.json(),
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

})
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim()
  if (!prompt) return
  const userId = await new Promise((r) => getUserId(r))
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
    body: JSON.stringify({ prompt })
  })
  const data = await res.json()
  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2)
})

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r))
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
    body: JSON.stringify({ role: 'Cloud Engineer' })

  })
  const data = await res.json()
  document.getElementById('result').textContent = data.description |'Draft saved.'
})
document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r))
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.')
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  })
  const data = await res.json()
  document.getElementById('result').textContent = JSON.stringify(data.results |[], null, 2)
})
document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r))
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.')
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  })
  const data = await res.json()
  document.getElementById('result').textContent = JSON.stringify(data.items |[], null, 2)
})
document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
<<<<<<< HEAD
  const id = crypto.randomUUID()
  setUserId(id)
document.getElementById('result').textContent = 'Signed in (local).';
})
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
const API BASE = 'http: //localhost:4000';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
  const id = crypto.randomUUID(),
  setUserId(id),
  document.getElementById('result').textContent = 'Signed in (local).';
}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
