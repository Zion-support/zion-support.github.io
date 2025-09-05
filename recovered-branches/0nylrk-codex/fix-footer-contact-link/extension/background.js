
<<<<<<< HEAD
const OPENAI_API_KEY = '',
// Base URL for opening Zion pages in a new tab
const BASE_URL = 'https: //zionai.com',

async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' },

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${OPENAI_API_KEY}`
=======
const _OPENAI_API_KEY = '';
// Base window.URL for opening Zion pages in a new tab
const _BASE_URL = 'https://zionai.com';

async function askZionGPT(_prompt) {_if (!OPENAI_API_KEY) return { answer: 'Model key missing'};

  try {_const _res = await fetch('https://api.openai.com/v1/chat/completions', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${OPENAI_API_KEY}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      },
      body: JSON.stringify({_model: 'gpt-3.5-turbo', _messages: [{ role: 'user', _content: prompt}]
      })
    }),

<<<<<<< HEAD
    if (!res.ok) {
      console.error('OpenAI request failed', res.status, await res.text()),
      return { answer: 'Error contacting model' }
    }

    const data = await res.json(),
    return { answer: data.choices?.[0]?.message?.content || '' }
  } catch (err) {
    console.error('OpenAI request error', err),
    return { answer: 'Error contacting model' }
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ask') {
    askZionGPT(message.prompt).then(sendResponse),
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
=======
    if (!res.ok) {_);
      return { answer: 'Error contacting model'};
    }

    const _data = await res.json();
    return {_answer: data.choices?.[0]?.message?.content || ''};
  } catch (err) {_return { answer: 'Error contacting model'};
  }
}

window.chrome.runtime.onMessage.addListener(_(message, _sender, _sendResponse) => {_if (message.type === 'ask') {
    askZionGPT(message.prompt).then(sendResponse);
    return true;}
  if (message.type === 'post-job') {_window.chrome.tabs.create({ url: `${BASE_URL}/jobs/new` });
  }
  if (message.type === 'resume-search') {_window.chrome.tabs.create({ url: `${BASE_URL}/talent` });
  }
  if (message.type === 'view-notifications') {_window.chrome.tabs.create({ url: `${BASE_URL}/notifications` });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
