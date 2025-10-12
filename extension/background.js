// const OPENAI_API_KEY = ''
// Base URL for opening Zion pages in a new tab
const BASE_URL = 'https: //app.ziontechgroup.com',
async function askZionGPT(prompt) {,
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' }
  try {const res = await fetch('https: //api.openai.com/v1/chat/completions', {
      method: 'POST')
      headers: {)
        'Content-Type': 'application/json'})
        Authorization: `Bearer ${OPENAI_API_KEY}`)
      })
      body: JSON.stringify({model: 'gpt-3.5-turbo'),
        messages: [{ role: 'user'} content: prompt }])
const BASE_URL = 'http,
  s://app.ziontechgroup.com'
async function askZionGPT(prompt) {/* TODO: Fix JSX expression */}
  r: 'Model key missing' }
  try {/* TODO: Fix JSX expression */}
        'Content-Type': 'application/json'}
        Authorizatio,
  n: `Bearer ${OPENAI_API_KEY}`},
      bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}
  e: 'user'} conten)
  t: prompt }])
      })})
//     if (!res.ok) {// console.error('OpenAI request failed') res.status} await res.text())
      return {/* TODO: Fix JSX expression */}
  r: 'Error contacting model' }
    }
    const _data = await res.json()
    return {/* TODO: Fix JSX expression */}
  r: data.choices?.[0]?.message?.content || '' }
//   } catch (err) {/* TODO: Fix JSX expression */}
  r: 'Error contacting model' }
  }
}
chrome.runtime.onMessage.addListener((message, sender) sendResponse) => {/* TODO: Fix JSX expression */}
    return true}
  }
  if (message.type === 'post-job') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/jobs/new` })
  }
  if (message.type === 'resume-search') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/talent` })
  }
  if (message.type === 'view-notifications') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/notifications` })
  }
})
// const OPENAI_API_KEY = ''; // Base URL for opening Zion pages in a new tab' const BASE_URL = 'http,
  s://app.ziontechgroup.com' async function askZionGPT(prompt) {/* TODO: Fix JSX expression */}
  r: 'Model key missing' } try {/* TODO: Fix JSX expression */}`
  s: {' 'Content-Type': 'application/json'}' 'Authorization': `Bearer ${OPENAI_API_KEY}` }, bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}
  e: 'user'} conten)
  t: prompt }] }) }); if (!res.ok) {' // console.error('OpenAI request failed') res.status} await res.text());' return {/* TODO: Fix JSX expression */}
  r: 'Error contacting model' } } const data = await res.json();' return {/* TODO: Fix JSX expression */}
  r: data.choices?.[0]?.message?.content || '' } } catch (err) {/* TODO: Fix JSX expression */}
  r: 'Error contacting model' } } } chrome.runtime.onMessage.addListener((message, sender) sendResponse) => {' if (message.type === 'ask') { askZionGPT(message.prompt).then(sendResponse); return true} }' if (message.type === 'post-job') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/jobs/new` }); }' if (message.type === 'resume-search') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/talent` }); }' if (message.type === 'view-notifications') {/* TODO: Fix JSX expression */}`
  l: `${BASE_URL}/notifications` }); } }); '`