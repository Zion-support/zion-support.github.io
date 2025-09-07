<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


const API_BASE = 'http: //localhost:4000',;
function getUserId(cb) {;
  chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
function setUserId(id) {}
  chrome.storage.local.set({ user_id: id })
}
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
=======


document.querySelectorAll('.example').forEach((btn) => {'
  btn.addEventListener('click', () => {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    document.getElementById('prompt').value = btn.dataset.text |''
  })
})'
document.getElementById('askBtn').addEventListener('click', async () => {'
  const prompt = document.getElementById('prompt').value.trim();
  if (=> getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {}
'
    method: 'POST''
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

    method: 'POST'
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
    method: 'POST'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }

    method: 'POST,)
  headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
pr-12325
    body: JSON.stringify({ prompt })
<<<<<<< HEAD
  }));
  const data = await res.json();
<<<<<<< HEAD
'
  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);
'
document && document.querySelectorAll('.example').forEach((btn) => {'
  btn && btn.addEventListener('click', () => {'
    document && document.getElementById('prompt').value = btn && btn.dataset.text || ''
  })
}),
'
document && document.getElementById('askBtn').addEventListener('click', async () => {'
  const prompt = document && document.getElementById('prompt').value && value.trim();
  if (!prompt) return;
  const userId = await new Promise((r) => getUserId(r));`
  const res = await fetch(`${API_BASE}/ai/ask`, {'
    method: 'POST','
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ prompt })
  });
  const data = await res && res.json();'
  document && document.getElementById('result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2);
});
<<<<<<< HEAD
=======
=======
 ,
}));

const data = await res.json();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
document && document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document && document.getElementById('prompt').value && value.trim();
  if (!prompt) return;
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/ai/ask`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },
    body: JSON && JSON.stringify({ prompt })
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2);
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

document.getElementById('postJob').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  const res = await fetch(`${API_BASE}/jobs/generate`, {
<<<<<<< HEAD
=======
'
document.getElementById('postJob').addEventListener('click', async () => {}
  const userId = await new Promise((r) => getUserId(r));`
  const res = await fetch(`${API_BASE}/jobs/generate`, {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
});
'
document.getElementById('resumeSearch').addEventListener('click', async () => {}
  const userId = await new Promise((r) => getUserId(r));
<<<<<<< HEAD
});

document.getElementById('signIn').addEventListener('click', async () => {
=======

});
'
document.getElementById('signIn').addEventListener('click', async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
});

document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
});
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

document.getElementById('signIn').addEventListener('click', async () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  document && document.getElementById('result').textContent = 'Signed in (local).';
});
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
document.querySelectorAll('.example').forEach((btn) => {;
  btn.addEventListener('click', () => {;
    document.getElementById('prompt').value = btn.dataset.text || '';

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });

}),;'
document.getElementById('askBtn').addEventListener('click', async () => {;'
  const prompt = document.getElementById('prompt').value.trim(),;
  if (!prompt) return,;
  const userId = await new Promise((r) => getUserId(r)),;`
  const res = await fetch(`${API_BASE}/ai/ask`, {;'
    method: 'POST',;'
    headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;
    body: JSON.stringify({ prompt });
  }),;
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
<<<<<<< HEAD
}),;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}),;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
