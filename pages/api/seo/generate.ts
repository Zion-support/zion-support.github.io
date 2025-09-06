import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  }
=======
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status($1).json({$2});
  try {
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`;
    const user = `Topic: ${prompt}
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
<<<<<<< HEAD
        { role: 'user', content: user },
      ],
      temperature: 0.7,
    });
=======
        { role: 'user', content: user }],
      temperature: 0.7}),
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
        {
          role: 'system',
          content:
            'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.',
        },
        {
          role: 'user',
          content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}`,
        },
      ],
      temperature: 0.5,
    });

    let faq: Array<{ q: string; a: string }> = [];
=======
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' };
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string; a: string }> = [],
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]');
    } catch {
      faq = [];
    }

    const h1 = prompt;
<<<<<<< HEAD
    const slug = String(prompt)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

=======
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return res.status(200).json({
      slug,
      payload: {
        title,
<<<<<<< HEAD
        h1,
=======
        h1;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        bodyHtml: content,
        region: region || undefined,
        service: service || undefined,
        faq,
      },
    });
  } catch (e) {
    console.error(e);
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to generate landing page' });
  }
=======
    return res.status(500).json({ error: 'Failed to generate landing page' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
