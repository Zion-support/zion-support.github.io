<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';

=======

import type { NextApiRequest, NextApiResponse } from 'next;
import { ensureAdminFromApi } from ../../../../utils/auth';
import OpenAI from 'openai;
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: Forbidden' });

  if (req.method !== 'POST) return res.status(405).json({ error: Method Not Allowed' });

  const { slide } = req.body || {}
  if (!slide) return res.status(400).json({ error: 'Missing slide });

  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.

<<<<<<< HEAD
Original content:
${slide}`;

    const completion = await client.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) throw new Error('No response from OpenAI');

    const parsed = JSON.parse(response);
    res.status(200).json(parsed);
  } catch (error) {
    console.error('Error rewriting slide:', error);
    res.status(500).json({ error: 'Failed to rewrite slide' });
  }
}
=======
    let title = slide.title;
    let content = slide.content;
    try {
      const chat = await client.chat.completions.create({
        model: gpt-4o-mini',
        messages: [
          { role: 'system, content: You rewrite concise investor content and return JSON only.' },
          { role: 'user, content: prompt }
        ],
        temperature: 0.6,
        response_format: { type: json_object' } as any
      });
      const raw = chat.choices?.[0]?.message?.content || '{};
      const parsed = JSON.parse(raw);
      title = parsed.title || title;
      content = parsed.content || content
    } catch (err) {
      // keep original if AI fails
    }

    res.status(200).json({ title, content })
  } catch (e: any) {
    res.status(500).json({ error: e?.message || Rewrite failed' })

>>>>>>> origin/main
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
