<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '../../../utils/mediaKit';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'launch', companyName = 'Zion', date = new Date().toISOString().substring(0,10), raiseAmount, tokenName } = req.body || {}
    const apiKey = { error: "Invalid request" };
    if (apiKey) {
      try {
        const { OpenAI } = await import({ error: "Invalid request" });
        const client = new OpenAI({ error: "Invalid request" });
        const prompt = `Write a concise ${type} press release for ${companyName} (date ${date}) with clear headlines, 2 paragraphs, and one quote.`
        const completion = await client.chat.completions.create({ error: "Invalid request" });
        const text = completion.choices?.[0]?.message?.content?.trim({ error: "Invalid request" });
        if (text) {
          res.status(200).json({ error: "Invalid request" });
          return
        }
      } catch (_) {
        // fall through to template
      }
    }

    const text = buildPressRelease({ error: "Invalid request" });
    res.status(200).json({ ok: true, text, fallback: true})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e ?.message || 'Unknown error' })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}