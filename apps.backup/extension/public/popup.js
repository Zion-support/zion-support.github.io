<<<<<<< HEAD


=======
function setUserId() {
  }
  chrome.storage.local.set({ 'user_id': id })
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
function setUserId(id) {
  chrome.storage.local.set({ user_id: id })
}





<<<<<<< HEAD




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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {}
    document.getElementById('prompt').value = btn.dataset.text |''}
  })
})

<<<<<<< HEAD
document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {

    document.getElementById('prompt').value = btn.dataset.text |
=======
document.querySelectorAll('.example').forEach((btn) => {'
  }
  btn.addEventListener('click', () => {'
    }
    document.getElementById('prompt').value = btn.dataset.text |'''
>>>>>>> origin/cursor/delete-old-data-records-6bba
  })
})
document.getElementById('askBtn').addEventListener('click', async () => {'
 ;
<<<<<<< HEAD
  const prompt = document.getElementById('prompt').value.trim();}
  if (=> getUserId(r)),}

  const res = await fetch(`${API_BASE}/ai/ask`, {
=======
  }
  const prompt = document.getElementById('prompt').value.trim();'
  if (=> getUserId(r)),
  const res = await fetch(`${API_BASE}/ai/ask`, {`
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

    'method': 'POST''
    'headers': { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }'

<<<<<<< HEAD
    method: 'POST,)
  headers: { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) }
pr-12325
    body: JSON.stringify({ prompt })


  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);

=======
    'body': JSON.stringify({ prompt })
 
}));

const data = await res.json();

  document.getElementById('result').textContent = data.text |JSON.stringify(data, null, 2);'

document && document.querySelectorAll('.example').forEach((btn) => {'
  }
  btn && btn.addEventListener('click', () => {'
    }
    document && document.getElementById('prompt').value = btn && btn.dataset.text || '''
  })
}),

document && document.getElementById('askBtn').addEventListener('click', async () => {'
 ;
  }
  const prompt = document && document.getElementById('prompt').value && value.trim();'
  if (!prompt) return;

const userId = await new Promise((r) => getUserId(r));

const res = await fetch(`${API_BASE}/ai/ask`, {`    }
    'method': 'POST','
    'headers': { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },'
    'body': JSON && JSON.stringify({ prompt })
 
});

const data = await res && res.json();
  document && document.getElementById('result').textContent = data && data.text || JSON && JSON.stringify(data, null, 2);'
});

document.getElementById('postJob').addEventListener('click', async () => {'
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
});

document.getElementById('resumeSearch').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
<<<<<<< HEAD


  if (!userId) return (document && document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.results || [], null, 2);


=======
  if (return (document.getElementById('result').textContent = 'Sign in first.'));
  const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {
    headers: { ...(userId ? { 'x-user-id': userId } : {}) }
  });
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.results |[], null, 2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
});

document.getElementById('viewNotifications').addEventListener('click', async () => {
  const userId = await new Promise((r) => getUserId(r));
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.');
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: { 'x-user-id': userId }
  });
<<<<<<< HEAD


  const data = await res && res.json();
  document && document.getElementById('result').textContent = JSON && JSON.stringify(data && data.items || [], null, 2);


=======
  const data = await res.json();

  document.getElementById('result').textContent = JSON.stringify(data.items |[], null, 2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
});

document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID();
  setUserId(id);


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
/**
 * getUserId - Function description
 */
function getUserId() {
  }
  chrome.storage.local.get (['user_id'], ({ user_id }) => cb (user_id));'
}
/**
 * setUserId - Function description
 */
function setUserId() {
  }
  chrome.storage.local.set ({ 'user_id': id
});
}
document.querySelectorAll ('.example').for_each ((btn) => {'
  }
  btn.addEventListener ('click', () => {'
    }
    document.getElementById ('prompt').value = btn.dataset.text || '';'
  });

<<<<<<< HEAD


  const prompt = document.getElementById('prompt').value.trim(),;
=======
  document.getElementById('result').textContent = 'Signed in (local).';
});

;
document.querySelectorAll('.example').forEach((btn) => {;
  btn.addEventListener('click', () => {;
    document.getElementById('prompt').value = btn.dataset.text || '';
  });
}),;
document.getElementById('askBtn').addEventListener('click', async () => {;'

}

const prompt = document.getElementById('prompt').value.trim(),;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!prompt) return,;

const userId = await new Promise((r) => getUserId(r)),;

const res = await fetch(`${API_BASE}/ai/ask`, {;`    }
    'method': 'POST',;'
    'headers': { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;'
    'body': JSON.stringify({ prompt
});
  }),;

<<<<<<< HEAD
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



=======
const data = await res.json(),;
  document.getElementById('result').textContent = data.text || JSON.stringify(data, null, 2);'
}),;
document.getElementById('postJob').addEventListener('click', async () => {;'

}

const userId = await new Promise((r) => getUserId(r)),;

const res = await fetch(`${API_BASE}/jobs/generate`, {;`    }
    'method': 'POST',;'
    'headers': { 'content-type': 'application/json', ...(userId ? { 'x-user-id': userId } : {}) },;'
    'body': JSON.stringify({ 'role': 'Cloud Engineer','
});
  }),;

const data = await res.json(),;
  document.getElementById('result').textContent = data.description || 'Draft saved.';'
}),;
document.getElementById('resumeSearch').addEventListener('click', async () => {;'

}

const userId = await new Promise((r) => getUserId(r)),;
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;'

const res = await fetch(`${API_BASE}/talent/search?q=AI%20researcher&country=Brazil`, {;`    }
    'headers': { ...(userId ? { 'x-user-id': userId } : {}) }'
 
}),;

const data = await res.json(),;
  document.getElementById('result').textContent = JSON.stringify(data.results || [], null, 2);'
}),;
document.getElementById('viewNotifications').addEventListener('click', async () => {;'

}

const userId = await new Promise((r) => getUserId(r)),;
  if (!userId) return (document.getElementById('result').textContent = 'Sign in first.'),;'

const res = await fetch(`${API_BASE}/notifications`, {;`
    }
    'headers': { 'x-user-id': userId }'
 
}),;

const data = await res.json(),;
  document.getElementById('result').textContent = JSON.stringify(data.items || [], null, 2);'
}),;
document.getElementById('signIn').addEventListener('click', async () => {;'
  // Placeholder sign-'in': generate a random user id and store it.;

}

const id = crypto.randomUUID(),;
  setUserId(id),;
  document.getElementById('result').textContent = 'Signed in (local).';'
}),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
