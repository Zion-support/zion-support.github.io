import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  try {
    const { markdown, targetLanguage = { error: "Invalid request" };
    if (!markdown) return res.status(400).json({ error: "Invalid request" });
    const openai = new OpenAI({ error: "Invalid request" });
    const completion = await openai.chat.completions.create({ error: "Invalid request" });
    const translated = { error: "Invalid request" };
    return res.status(200).json({ translated })
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Translation failed' })
  }
}

}
}
