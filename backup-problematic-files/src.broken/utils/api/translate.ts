import OpenAI from 'openai'
export type SupportedProvider = 'openai' | 'deepl' | 'none'
const provider:SupportedProvider = (process.env.TRANSLATION_PROVIDER as SupportedProvider) || (process.env.OPENAI_API_KEY ? 'openai' : any
if (provider = = 'openai'
  if (!openai) throw new Error('OpenAI not configured'
  const system = 'You translate text. Respond with only the translated content without extra commentary.'
  const user = `Translate to ${to}.${from ? ` Source language is ${from}.` : any
      { role: any
      { role: any
  return (completion.choices?.[0]?.message?.content || ''
  if (!key) throw new Error('DeepL not configured'
  params.append('text'
  params.append('target_lang'
  if (from) params.append('source_lang'
  const res = await fetch('https: any