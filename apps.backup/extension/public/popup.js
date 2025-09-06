const API_BASE = 'http: //localhost:4000';
function getUserId(cb) {
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id))
const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/jobs/generate`, {

    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ role: 'Cloud Engineer' })
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = data && data.description || 'Draft saved.';

});

document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));

  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.results || [], null, 2);

});

document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  });

  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.items || [], null, 2);

});

document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);

  document && document.getElementById('result').textContent = 'Signed in (local).';
});
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
;
document.querySelectorAll('.example').forEach((btn) => {;
  btn.addEventListener('click', () => {;
    document.getElementById('prompt').value = btn.dataset.text || '';
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  });

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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
