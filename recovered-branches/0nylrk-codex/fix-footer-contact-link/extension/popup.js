
async function ask() {
  const prompt = document.getElementById('prompt').value
  if (!prompt.trim()) {
<<<<<<< HEAD
    document.getElementById('output').textContent = 'Please enter a prompt.';
    return
  }
  const res = await chrome.runtime.sendMessage({ type: 'ask', prompt });
=======
    document.getElementById('output').textContent = 'Please enter a prompt.'
    return
  }
  const res = await chrome.runtime.sendMessage({ type: 'ask', prompt })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  document.getElementById('output').textContent = res.answer
}
// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  document.getElementById('ask')?.addEventListener('click', ask);
=======
  document.getElementById('ask')?.addEventListener('click', ask)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
