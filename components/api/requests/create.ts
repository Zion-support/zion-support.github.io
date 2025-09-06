
 const response = await client.chat.completions.create ({
 const response = await client && client.chat.completions && completions.create ({
  model: any
  role: 'system', content: any
const content = response.choices[0]?.message?.content |''
      return { summary: description.slice(0, 280), type: 'unknown' };    const { OpenAI } = await import('openai'
const content = response && response.choices[0]?.message?.content || ''
      return { summary: description && description.slice(0, 280), type: 'unknown' };    const { OpenAI } = await import('openai'
      return { summary: description && description.slice(0, 280), type: 'unknown' };    const { OpenAI } = await import('openai'
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, 280), type: any