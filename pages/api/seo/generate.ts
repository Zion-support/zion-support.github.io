import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { prompt, region, service } = req.body || {},
  if (!prompt) return res.status(400).json($2);
  try {
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`,

    const user = `Topic: ${prompt}
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`,

    const response = await openai.chat.completions.create($2);
    const content = $2;
    const title = $2;
    // FAQ generation
    const faqResp = await openai.chat.completions.create($2);
    let faq: Array<{ q: string, a: string}> = [],
    try {
      faq = $2;
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace($2);
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
    console.error($2);
    return res.status(500).json({ error: 'Failed to generate landing page' })
  }
}