
async function ask() {
<<<<<<< HEAD
  const prompt = document.getElementById('prompt').value
  if (!prompt.trim()) {

    document.getElementById('output').textContent = 'Please enter a prompt.'
    return
  }
  const res = await chrome.runtime.sendMessage({ type: 'ask', prompt })

  document.getElementById('output').textContent = res.answer
=======
  try {
  const prompt = document && document.getElementById('prompt').value,
  if (!prompt && prompt.trim()) {
    document && document.getElementById('output').textContent = 'Please enter a prompt.',
    return
  }
  const res = await chrome && chrome.runtime.sendMessage({ type: 'ask', prompt }),
  document && document.getElementById('output').textContent = res && res.answer
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
// Attach handlers once the DOM is fully loaded to avoid null element errors
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  })

});

