import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown)
      return res.status(400).json({ error: 'markdown is required' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown) return res.status(400).json({ error: 'markdown is required' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown) return res.status(400).json({ error: 'markdown is required' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
<<<<<<< HEAD
        {
          role: 'system',
          content:
            'You are a professional translator for policy and development documents.',
        },
        {
          role: 'user',
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,
        },
=======
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ],
      temperature: 0.2
    });

    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Translation failed' });
  }
<<<<<<< HEAD
=======
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }
      ],
      temperature: 0.2
    });

    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Translation failed' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
