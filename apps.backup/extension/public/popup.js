

const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));

}
pr-12325
function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
function setUserId(id) {}
  chrome.storage.local.set({ user_id: id }),
}

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {}
    document.getElementById('prompt').value = btn.dataset.text |''}
  })
})




document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text |
  })
pr-12325
document.getElementById('askBtn').addEventListener('click', async () => {
 ;
  const prompt = document.getElementById('prompt').value.trim();}
  if (=> getUserId(r)),}
  const res = await fetch(`${API_BASE}/ai/ask`, {
}
    method: 'POST'}
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }

    method: 'POST,)
  headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
pr-12325
    body: JSON.stringify({ prompt })
 ,
}));

const data = await res.json();

  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);

document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {}
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''}
  })
document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {
    document && document.getElementById('prompt').value = btn && btn.dataset.text || 
pr-12325
}),



document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);

