
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

}),
;


    chrome.runtime.sendMessage({ type: 'post-job' });
  }),;'
  document.getElementById('resume-search')?.addEventListener('click', () => {;'
    chrome.runtime.sendMessage({ type: 'resume-search' });
  }),;'
  document.getElementById('view-notifications')?.addEventListener('click', () => {;'
    chrome.runtime.sendMessage({ type: 'view-notifications' });
  });





