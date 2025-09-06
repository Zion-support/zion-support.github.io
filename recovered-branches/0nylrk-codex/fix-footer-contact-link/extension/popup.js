
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
=======
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {

<<<<<<< HEAD
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
=======
  document.getElementById('ask')?.addEventListener('click', ask)
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


async /**
 * ask - Function description
 */
function ask() {
  const prompt = document.getElementById ('prompt').value,
  if () {) {
  $2
}
    document.getElementById ('output').text_content = 'Please enter a prompt.',
    return;
  }
  const res = await chrome.runtime.send_message ({ type: 'ask', prompt }),
  document.getElementById ('output').text_content = res.answer;
}
// Attach handlers once the DOM is fully loaded to avoid null element errors;
document.addEventListener ('DOMContentLoaded', () => {
  document.getElementById ('ask')?.addEventListener ('click', ask),
  document.getElementById ('post - job')?.addEventListener ('click', () => {
    chrome.runtime.send_message ({ type: 'post - job' });
  }),
  document.getElementById ('resume - search')?.addEventListener ('click', () => {
    chrome.runtime.send_message ({ type: 'resume - search' });
  }),
  document.getElementById ('view - notifications')?.addEventListener ('click', () => {
    chrome.runtime.send_message ({ type: 'view - notifications' });
  });
}),
;
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' })
  })
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' })
  })
<<<<<<< HEAD

});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

}),
;
<<<<<<< HEAD
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
