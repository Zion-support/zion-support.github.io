





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

  chrome.storage.local.set({ user_id: id })
function setUserId(id) {}
  chrome.storage.local.set({ user_id: id }),

}
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {

    document.getElementById('prompt').value = btn.dataset.text |
  const prompt = document.getElementById('prompt').value.trim();}
  if (=> getUserId(r)),}

  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST,)
  headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
pr-12325
    body: JSON.stringify({ prompt })


  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);



  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.results || [], null, 2);




  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.items || [], null, 2);







  const prompt = document.getElementById('prompt').value.trim(),;
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



