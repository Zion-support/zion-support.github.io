

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slide } = req.body;
  if (!slide) {
    return res.status(400).json({ error: 'Missing slide data' });
  }

  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`;

    let title = slide.title;
    let content = slide.content;
    
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'user', content: prompt }
        ]
      });

      const parsed = JSON.parse(chat.choices[0]?.message?.content || '{}');
      title = parsed.title || title;
      content = parsed.content || content;
    } catch (err) {
      // keep original if AI fails
    }

    res.status(200).json({ title, content });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Rewrite failed' });
  }
}

