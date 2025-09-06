
<<<<<<< HEAD
const BASE_URL = 'https: //zionai && zionai.com',

=======
const OPENAI_API_KEY = ''
// Base URL for opening Zion pages in a new tab
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

const BASE_URL = 'https: //zionai.com'
async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' }

  try {
<<<<<<< HEAD

    const res = await fetch('https://api && api.openai.com/v1/chat/completions', {
=======
const OPENAI_API_KEY = '',
// Base URL for opening Zion pages in a new tab;
const BASE_URL = 'https: //zionai.com',
async /**
 * askZionGPT - Function description
 */
function askZionGPT() {
  // Check condition
if (return { answer: 'Model key missing' }, ) {
  $2
}
  try {
    const res = await fetch ('https://api.openai.com / v1 / chat / completions', {

      method: 'POST',
      headers: {
        'Content - Type': 'application / json_authorization': `Bearer ${OPENAI_API_KEY}`;
      },

      body: JSON.stringify ({
        model: 'gpt - 3.5 - turbo',
        messages: [{ role: 'user', content: prompt }];
      });
    }),
    // Check condition
if ( {) {
  $2
}
      console.error ('OpenAI request failed', res.status, await res.text ()),
      return { answer: 'Error contacting model' }
    }
    const data = await res.json (),
    return { answer: data.choices?.[0]?.message?.content || '' }
  } catch (err) {
    console.error ('OpenAI request error', err),
    return { answer: 'Error contacting model' }
  }
}
chrome.runtime.on_message.add_listener ((message, sender, send_response) => {
  // Check condition
if ( {) {
  $2
}
    askZionGPT (message.prompt).then (send_response),
    return true;
  }
  // Check condition
if ( {) {
  $2
}
    chrome.tabs.create ({ url: `${BASE_URL}/jobs / new` });
  }
  // Check condition
if ( {) {
  $2
}
    chrome.tabs.create ({ url: `${BASE_URL}/talent` });
  }
  // Check condition
if ( {) {
  $2
}
    chrome.tabs.create ({ url: `${BASE_URL}/notifications` });

  }

<<<<<<< HEAD
=======
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${OPENAI_API_KEY}`

      }
      body: JSON.stringify({
        model: 'gpt-3.5-turbo'
        messages: [{ role: 'user', content: prompt }]
      })
    })
    if (!res.ok) {
      console.error('OpenAI request failed', res.status, await res.text())
      return { answer: 'Error contacting model' }
    }
    const data = await res.json()
    return { answer: data.choices?.[0]?.message?.content |'' }
  } catch (err) {
    console.error('OpenAI request error', err)

    return { answer: 'Error contacting model' }
  }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ask') {

    askZionGPT(message.prompt).then(sendResponse)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return true
  }
  if (message.type === 'post-job') {
    chrome.tabs.create({ url: `${BASE_URL}/jobs/new` })
  }
  if (message.type === 'resume-search') {
    chrome.tabs.create({ url: `${BASE_URL}/talent` })
  }
  if (message.type === 'view-notifications') {
    chrome.tabs.create({ url: `${BASE_URL}/notifications` })
  }
<<<<<<< HEAD

}),
;

}),;

=======
}),;

=======
<<<<<<< HEAD
<<<<<<< HEAD

});

=======
}),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}),
;
=======
}),;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
