import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { prompt, region, service } = req.body || {},
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' }),
  try {
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY || ''});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }
  const {_prompt, _region, _service} = req.body || {};
  if (!prompt) return res.status(400).json({_error: 'Missing prompt'});
  try {_const _system = `You generate conversion-focused, _SEO-optimized landing pages in HTML. Include:
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, _bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    const _user = `Topic: ${prompt}
Region: ${_region || 'global'}
Service focus: ${_service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`,

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }],
      temperature: 0.7}),

    const content = response.choices?.[0]?.message?.content || ''
    const title = `Zion Marketplace — ${prompt}`

    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{&quot;q&quot;:"&quot;,&quot;a&quot;:"&quot;}], focus on buyer concerns for the topic.' },
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),

    let faq: Array<{ q: string, a: string }> = [],
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []
    }

    const h1 = prompt
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),

    return res.status(200).json({
      slug,
      payload: {
        title,
        h1,
        bodyHtml: content,
        region: region || undefined,
        service: service || undefined,
        faq}})
  } catch (e) {
    console.error(e),
    return res.status(500).json({ error: 'Failed to generate landing page' })
  }
}