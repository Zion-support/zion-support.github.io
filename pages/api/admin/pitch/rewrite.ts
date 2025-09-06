<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


<<<<<<< HEAD
<<<<<<< HEAD
=======
const { slide } = req.body || {};
  if (!slide) return res.status(400).json({ error: 'Missing slide' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


    if (req.method === 'POST') {
      const { slide } = req.body;
      if (!slide) return res.status(400).json({ error: 'Slide required' });

<<<<<<< HEAD
      const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { slide } = req.body |{}
  if (!slide) return res.status(400).json({ error: 'Missing slide' })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`,

    let title = slide.title,
    let content = slide.content,
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [
<<<<<<< HEAD
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' },
          { role: 'user', content: prompt }],
        temperature: 0.6,
        response_format: { type: 'json_object' } as any}),
      const raw = chat.choices?.[0]?.message?.content || '{}',
      const parsed = JSON.parse(raw),
      title = parsed.title || title,
      content = parsed.content || content
=======

      content = parsed.content || content

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    } catch (err) {
      // keep original if AI fails;
    }

    res.status(200).json({ title, content })
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Rewrite failed' })
<<<<<<< HEAD
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======


  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
