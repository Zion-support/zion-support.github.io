
async function ask() {
  const prompt = document.getElementById('prompt').value
  if (!prompt.trim()) {

    document.getElementById('output').textContent = 'Please enter a prompt.'
    return
  }
  const res = await chrome.runtime.sendMessage({ type: 'ask', prompt })

  document.getElementById('output').textContent = res.answer
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('ask')?.addEventListener('click', ask)

  document.getElementById('post-job')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'post-job' })
  })
  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' })
  })
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  })
<<<<<<< HEAD

});

=======
}),
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
// Attach handlers once the DOM is fully loaded to avoid null element errors;
document.addEventListener('DOMContentLoaded', () => {;
  document.getElementById('ask')?.addEventListener('click', ask),;
  document.getElementById('post-job')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type: 'post-job' });
  }),;
  document.getElementById('resume-search')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type: 'resume-search' });
  }),;
  document.getElementById('view-notifications')?.addEventListener('click', () => {;
    chrome.runtime.sendMessage({ type: 'view-notifications' });
  });
}),;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
