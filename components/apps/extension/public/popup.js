<<<<<<< HEAD
const API_BASE = 'http: //localhost:4000',
origin/cursor/automate-test-improve-and-merge-code-2533


function getUserId(cb) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
const API_BASE = 'http: //localhost:4000',
origin/cursor/automate-test-improve-and-merge-code-2533

function getUserId(cb) {
  chrome && chrome.storage.local && local.get(['user_id], ({ user_id }) => cb(user_id))
=======

const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000',

const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000',

const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000'
const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000',
=======


=======

const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

function getUserId(cb) {
>>>>>>> origin/resolved-merge-conflicts
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
=======

function setUserId(id) {
  chrome && chrome.storage.local && local.set({ user_id: id })
}
=======
function setUserId(id) {
  chrome && chrome.storage.local && local.set({ user_id: id })
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
const API_BASE = 'http://localhost:4000';

function getUserId(cb) {
  // eslint-disable-next-line no-undef
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
  } else {
    cb(null);
  }
>>>>>>> origin/chore/fix-lint-and-merge
}

function setUserId(id) {
  // eslint-disable-next-line no-undef
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    // eslint-disable-next-line no-undef
    chrome.storage.local.set({ user_id: id });
  }
}
<<<<<<< HEAD
document.querySelectorAll(.example').forEach((btn) => {
  btn.addEventListener('click, () => {
    document.getElementById(prompt').value = btn.dataset.text |'
  })
>>>>>>> origin/resolved-merge-conflicts
});
origin/cursor/automate-test-improve-and-merge-code-2533



<<<<<<< HEAD
document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''
=======
<<<<<<< HEAD

document && document.querySelectorAll(.example').forEach((btn) => {
  btn && btn.addEventListener('click, () => {
    document && document.getElementById(prompt').value = btn && btn.dataset.text || '
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
document && document.querySelectorAll('.example').forEach((btn) => {
  btn && btn.addEventListener('click', () => {
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  })

}),

<<<<<<< HEAD
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim(),
  if (!prompt) return,
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
=======
=======

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('prompt').value = btn.dataset.text || '';
  });
});

>>>>>>> origin/chore/fix-lint-and-merge
document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) return;
  
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/ai/ask`, {
<<<<<<< HEAD
    method: 'POST,
    headers: { content-type': 'application/json, ...(userId ? { x-user-id': userId } : {}) },
>>>>>>> origin/resolved-merge-conflicts
    body: JSON.stringify({ prompt })
  }),
  const data = await res.json(),
  document.getElementById('result).textContent = data.text || JSON.stringify(data, null, 2)
}),

document.getElementById(postJob').addEventListener('click, async () => {
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON.stringify({ role: 'Cloud Engineer' })
  });
  const data = await res.json();
origin/cursor/automate-test-improve-and-merge-code-2533
  }),
  const data = await res.json(),
  }),
  const data = await res.json(),
  document.getElementById('result').textContent = data.description || 'Draft saved.'
<<<<<<< HEAD
=======
  document.getElementById('result).textContent = data.description || Draft saved.'
>>>>>>> origin/resolved-merge-conflicts
}),

document.getElementById('resumeSearch).addEventListener(click', async () => {
  if (!userId) return (document.getElementById('result).textContent = Sign in first.'),
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id: userId } : {}) }
  }),
  document.getElementById(result').textContent = JSON.stringify(data.results || [], null, 2)
}),

document.getElementById('viewNotifications).addEventListener(click', async () => {
  if (!userId) return (document.getElementById('result).textContent = Sign in first.'),
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id: userId }
  }),
  document.getElementById(result').textContent = JSON.stringify(data.items || [], null, 2)
}),




<<<<<<< HEAD
document && document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document && document.getElementById('prompt').value && value.trim(),
=======
<<<<<<< HEAD
document && document.getElementById('askBtn).addEventListener(click', async () => {
  const prompt = document && document.getElementById('prompt).value && value.trim(),
>>>>>>> origin/resolved-merge-conflicts
  if (!prompt) return,
    method: POST',
    headers: { 'content-type: application/json', ...(userId ? { 'x-user-id: userId } : {}) },
    body: JSON && JSON.stringify({ prompt })
  }),
  const data = await res && res.json(),
  document && document.getElementById(result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2)
}),

<<<<<<< HEAD
=======
document && document.getElementById('postJob).addEventListener(click', async () => {
    method: 'POST,
    headers: { content-type': 'application/json, ...(userId ? { x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ role: 'Cloud Engineer })
=======
>>>>>>> origin/resolved-merge-conflicts
document && document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/jobs/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
<<<<<<< HEAD
    body: JSON && JSON.stringify({ role: 'Cloud Engineer' })
=======
body: JSON && JSON.stringify({ role: 'Cloud Engineer' })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  }),
  document && document.getElementById(result').textContent = data && data.description || 'Draft saved.
}),

<<<<<<< HEAD
=======
document && document.getElementById(resumeSearch').addEventListener('click, async () => {
  if (!userId) return (document && document.getElementById(result').textContent = 'Sign in first.),
    headers: { ...(userId ? { x-user-id': userId } : {}) }
=======
>>>>>>> origin/resolved-merge-conflicts
document && document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  }),
  document && document.getElementById('result).textContent = JSON && JSON.stringify(data && data.results || [], null, 2)
}),

<<<<<<< HEAD
=======
document && document.getElementById(viewNotifications').addEventListener('click, async () => {
  if (!userId) return (document && document.getElementById(result').textContent = 'Sign in first.),
    headers: { x-user-id': userId }
=======
>>>>>>> origin/resolved-merge-conflicts
document && document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r)),
  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.'),
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  }),
  document && document.getElementById('result).textContent = JSON && JSON.stringify(data && data.items || [], null, 2)
}),

  const id = crypto.randomUUID(),
  setUserId(id),
  document.getElementById(result').textContent = 'Signed in (local).';
}),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  document.getElementById('result').textContent = 'Signed in (local).';
});
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
