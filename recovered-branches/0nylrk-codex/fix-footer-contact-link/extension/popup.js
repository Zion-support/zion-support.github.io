
async function ask() {
  const prompt = $2;
  if (!prompt.trim()) {
    document.getElementById('output').textContent = $2;
    return
  }
  const res = await chrome.runtime.sendMessage($2);
  document.getElementById('output').textContent = res.answer
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ask')?.addEventListener($2);
  document.getElementById('post-job')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'post-job' })
  }),
  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' })
  }),
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  })
}),
