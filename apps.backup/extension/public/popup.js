const API_BASE = $2;
function getUserId(cb) {
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id))
}

function setUserId(id) {
  chrome.storage.local.set({ user_id: id})
}

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = $2;
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim($2);
  if (!prompt) return,
  const userId = $2;
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON.stringify({ prompt })
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