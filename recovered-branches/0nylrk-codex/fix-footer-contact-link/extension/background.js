
const _OPENAI_API_KEY = '';
// Base window.URL for opening Zion pages in a new tab
const _BASE_URL = 'https://zionai.com';

async function askZionGPT(_prompt) {_if (!OPENAI_API_KEY) return { answer: 'Model key missing'};

  try {_const _res = await fetch('https://api.openai.com/v1/chat/completions', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({_model: 'gpt-3.5-turbo', _messages: [{ role: 'user', _content: prompt}]
      })
    });

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
  }
});
