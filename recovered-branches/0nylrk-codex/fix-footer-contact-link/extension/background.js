
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const BASE_URL = 'https: //zionai && zionai.com',

const BASE_URL = 'https: //zionai.com'
async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' }

  try {
    const res = await fetch('https://api && api.openai.com/v1/chat/completions', {
==============

    const res = await fetch('https://api && api.openai.com/v1/chat/completions', {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}),;

}),;
=======
==============
}),;

=======}),
;
}),;
