<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { slide } = req.body |{}
  if (!slide) return res.status(400).json({ error: 'Missing slide' })

  const { slide } = req.body || {};
  if (!slide) return res.status(400).json({ error: 'Missing slide' });

  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`
    let title = slide.title
    let content = slide.content
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' }
          { role: 'user', content: prompt }]
        temperature: 0.6
response_format: { type: 'json_object' } as any})
      const raw = chat.choices?.[0]?.message?.content |'{}'
      const parsed = JSON.parse(raw)
      title = parsed.title |title
      content = parsed.content |content
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.6,
        response_format: { type: 'json_object' } as any});
      const raw = chat.choices?.[0]?.message?.content || '{}';
      const parsed = JSON.parse(raw);
      title = parsed.title || title;
      content = parsed.content || content
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensureAdminFromApi } from '../../../../utils / auth',
import OpenAI from 'openai',
const client = new OpenAI ({ api_key: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req);
  if (return res.status (403).json ({ error: 'Forbidden' })) {
  $2
}
  if (return res.status (405).json ({ error: 'Method Not Allowed' })) {
  $2
}
  const { slide } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing slide' }), ) {
  $2
}
  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120 - 150 words, punchy, and data - driven. Return JSON with keys title and content.;
Title: ${slide.title}\n_content:\n${slide.content}`,
    let title = slide.title,
    let content = slide.content,
    try {
      const chat = await client.chat.completions.create ({
        model: 'gpt - 4o - mini',
        messages: [;
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' },
          { role: 'user', content: prompt }],
        temperature: 0.6,
response_format: { type: 'json_object' } as any}),
      const raw = chat.choices?.[0]?.message?.content || '{}',
      const parsed = JSON.parse (raw),
      title = parsed.title || title,
      content = parsed.content || content;
    } catch (err) {
      // keep original if AI fails;
    }
res.status(200).json({ title, content })
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |'Rewrite failed' })

  }
}
    res.status(200).json({ title, content })
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Rewrite failed' })
  }
}
res.status (200).json ({ title, content });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || 'Rewrite failed' });
  }
}
;
=======
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |'Rewrite failed' })


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
    res.status(500).json({ error: e?.message || 'Rewrite failed' })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
