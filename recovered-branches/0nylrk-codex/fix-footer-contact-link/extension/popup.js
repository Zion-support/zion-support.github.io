
async function ask() {_const _prompt = document.getElementById('prompt').value;
  if (!prompt.trim()) {
    document.getElementById('output').textContent = 'Please enter a prompt.';
    return;}
  const _res = await window.chrome.runtime.sendMessage({_type: 'ask', _prompt});
  document.getElementById('output').textContent = res.answer;
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener(_'DOMContentLoaded', _() => {_document.getElementById('ask')?.addEventListener('click', _ask);

  document.getElementById('post-job')?.addEventListener(_'click', _() => {
    window.chrome.runtime.sendMessage({ type: 'post-job'});
  });
  document.getElementById('resume-search')?.addEventListener(_'click', _() => {_window.chrome.runtime.sendMessage({ type: 'resume-search'});
  });
  document.getElementById('view-notifications')?.addEventListener(_'click', _() => {_window.chrome.runtime.sendMessage({ type: 'view-notifications'});
  });
});
