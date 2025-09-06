
const OPENAI_API_KEY = ''
// Base URL for opening Zion pages in a new tab
<<<<<<< HEAD
const BASE_URL = 'https: //zionai.com',
async function askZionGPT(prompt) {
  if (return { answer: 'Model key missing' },

=======
const BASE_URL = 'https: //zionai.com'
async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${OPENAI_API_KEY}`
<<<<<<< HEAD
      };
      body: JSON.stringify({
        model: 'gpt-3.5-turbo';
        messages: [{ role: 'user', content: prompt }]
      })
    }));
    if (!res.ok) {
      console.error('OpenAI request failed', res.status, await res.text());
      return { answer: 'Error contacting model' }
    }

    const data = await res.json();
    return { answer: data.choices?.[0]?.message?.content || '' }
  } catch (err) {
    console.error('OpenAI request error', err);
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return { answer: 'Error contacting model' }
  }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ask') {
<<<<<<< HEAD
    askZionGPT(message.prompt).then(sendResponse);
=======
    askZionGPT(message.prompt).then(sendResponse)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
});
=======
});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
