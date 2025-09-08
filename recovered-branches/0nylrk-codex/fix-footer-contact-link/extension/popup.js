<<<<<<< HEAD
=======

try {
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Attach handlers once the DOM is fully loaded to avoid null element errors

  document && document.getElementById('ask')?.addEventListener('click', ask),

    chrome && chrome.runtime.sendMessage({ type: 'post-job' })
  }),'
  document && document.getElementById('resume-search')?.addEventListener('click', () => {'
    chrome && chrome.runtime.sendMessage({ type: 'resume-search' })
  }),'
  document && document.getElementById('view-notifications')?.addEventListener('click', () => {'
    chrome && chrome.runtime.sendMessage({ type: 'view-notifications' })

  })

}

<<<<<<< HEAD
=======
// Attach handlers once the DOM is fully loaded to avoid null element errors

}
// Attach handlers once the DOM is fully loaded to avoid null element errors
document && document.addEventListener('DOMContentLoaded', () => {
  document && document.getElementById('ask')?.addEventListener('click', ask),
  document && document.getElementById('post-job')?.addEventListener('click', () => {
    chrome && chrome.runtime.sendMessage({ type: 'post-job' })
  }),
  document && document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome && chrome.runtime.sendMessage({ type: 'resume-search' })
  }),
  document && document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome && chrome.runtime.sendMessage({ type: 'view-notifications' })


async function ask() {
  const prompt = document.getElementById('prompt').value
  if (!prompt.trim()) {

    document.getElementById('output').textContent = 'Please enter a prompt.'
    return

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  const res = await chrome.runtime.sendMessage({ type: 'ask', prompt })

  document.getElementById('output').textContent = res.answer
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {

// Attach handlers once the DOM is fully loaded to avoid null element errors'
document.addEventListener('DOMContentLoaded', () => {}
'
document && document.addEventListener('DOMContentLoaded', () => {'
  document && document.getElementById('ask')?.addEventListener('click', ask),
'
  document.getElementById('post-job')?.addEventListener('click', () => {'
    chrome.runtime.sendMessage({ type: 'post-job' })
  })
'
  document.getElementById('post-job')?.addEventListener('click', () => {'
    chrome.runtime.sendMessage({ type: 'post-job' })

  document.getElementById('resume-search')?.addEventListener('click', () => {

    chrome.runtime.sendMessage({ type: 'resume-search' })
  })'
  document.getElementById('view-notifications')?.addEventListener('click', () => {'
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  });

<<<<<<< HEAD
}),
;


=======
// Attach handlers once the DOM is fully loaded to avoid null element errors;'
document.addEventListener('DOMContentLoaded', () => {;'
  document.getElementById('ask')?.addEventListener('click', ask),;'
  document.getElementById('post-job')?.addEventListener('click', () => {;'

>>>>>>> origin/cursor/delete-old-data-records-6bba
    chrome.runtime.sendMessage({ type: 'post-job' });
  }),;'
  document.getElementById('resume-search')?.addEventListener('click', () => {;'
    chrome.runtime.sendMessage({ type: 'resume-search' });
  }),;'
  document.getElementById('view-notifications')?.addEventListener('click', () => {;'
    chrome.runtime.sendMessage({ type: 'view-notifications' });
  });

<<<<<<< HEAD




=======

;
  document.getElementById('post-job')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type:'post-job' }),;
  }),;
  document.getElementById('resume-search')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type:'resume-search' }),;
  }),;
  document.getElementById('view-notifications')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type:'view-notifications' }),;
  }),;

}),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
