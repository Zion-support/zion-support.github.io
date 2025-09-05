const API_BASE = 'http://localhost:4000';

function getUserId(_cb) {_window.chrome.storage.local.get(_['user_id'], _({ user_id}) => cb(user_id));
}

function setUserId(_id) {_window.chrome.storage.local.set({ user_id: id});
}

document.querySelectorAll('.example').forEach(_(btn) => {_btn.addEventListener(_'click', _() => {
    document.getElementById('prompt').value = btn.dataset.text || '';});
});

document.getElementById('askBtn').addEventListener(_'click', _async () => {_const _prompt = document.getElementById('prompt').value.trim();
  if (!prompt) return;
  const _userId = await new Promise(_(r) => getUserId(r));
  const _res = await fetch(`${API_BASE}/ai/ask`, {_method: 'POST', _headers: { 'content-type': 'application/json', _...(userId ? { 'x-user-id': userId} : {}) },
    body: JSON.stringify({_prompt})
  });
  const _data = await res.json();
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2);
});

document.getElementById('postJob').addEventListener(_'click', _async () => {_const _userId = await new Promise(_(r) => getUserId(r));
  const _res = await fetch(`${API_BASE}/jobs/generate`, {_method: 'POST', _headers: { 'content-type': 'application/json', _...(userId ? { 'x-user-id': userId} : {}) },
    body: JSON.stringify({_role: 'Cloud Engineer'})
  });
  const _data = await res.json();
  document.getElementById('result').textContent = data.description || 'Draft saved.';
});

document.getElementById('resumeSearch').addEventListener(_'click', _async () => {_const _userId = await new Promise(_(r) => getUserId(r));
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.');
  const _res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {_headers: { ...(userId ? { 'x-user-id': userId} : {}) }
  });
  const _data = await res.json();
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2);
});

document.getElementById('signIn').addEventListener(_'click', _() => {_const _id = window.crypto.randomUUID();
  setUserId(id);
  document.getElementById('result').textContent = `Signed in as ${id}`;
});

document.getElementById('signOut').addEventListener(_'click', _() => {_setUserId(null);
  document.getElementById('result').textContent = 'Signed out';});

// Load saved user ID on startup
getUserId(_(userId) => {_if (userId) {
    document.getElementById('result').textContent = `Signed in as ${userId}`;
  }
});