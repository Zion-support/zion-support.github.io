
  try {
  const prompt = document && document.getElementById('prompt').value,
  if (!prompt && prompt.trim()) {
    document && document.getElementById('output').textContent = 'Please enter a prompt.',
    return
  }
  const res = await chrome && chrome.runtime.sendMessage({ type: 'ask', prompt }),
  document && document.getElementById('output').textContent = res && res.answer

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Attach handlers once the DOM is fully loaded to avoid null element errors

document && document.addEventListener('DOMContentLoaded', () => {
  document && document.getElementById('ask')?.addEventListener('click', ask),

  document.getElementById('post-job')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'post-job' })
  })
  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' })
  })
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
