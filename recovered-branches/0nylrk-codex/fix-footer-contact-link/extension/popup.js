
  try {
  const prompt = document && document.getElementById('prompt').value,
  if (!prompt && prompt.trim()) {
    document && document.getElementById('output').textContent = 'Please enter a prompt.',
    return
  }
  const res = await chrome && chrome.runtime.sendMessage({ type: 'ask', prompt }),
  document && document.getElementById('output').textContent = res && res.answer

}
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
// Attach handlers once the DOM is fully loaded to avoid null element errors

document && document.addEventListener('DOMContentLoaded', () => {
  document && document.getElementById('ask')?.addEventListener('click', ask),

  document.getElementById('post-job')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'post-job' })
  })
<<<<<<< HEAD

  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' })
  })
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  })



});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}),
;

<<<<<<< HEAD

=======
=======
}),
;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
