<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY })
>>>>>>> pr-12243
  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`

    let title = slide.title
    let content = slide.content
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [

          { role: 'user', content: prompt }],
        temperature: 0.6,'
        response_format: { type: 'json_object' } as any}),'
      const raw = chat.choices?.[0]?.message?.content || '{}',
      const parsed = JSON.parse(raw),
      title = parsed.title || title,

          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' }
          { role: 'user', content: prompt }]
        temperature: 0.6
        response_format: { type: 'json_object' } as any})
      const raw = chat.choices?.[0]?.message?.content || '{}'
      const parsed = JSON.parse(raw)
      title = parsed.title || title
      content = parsed.content || content
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
{
            role: 'system',
            content:
              'You rewrite concise investor content and return JSON only.',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.6,
        response_format: { type: 'json_object' } as any,
      });
      const raw = chat.choices?.[0]?.message?.content || '{}';
      const parsed = JSON.parse(raw);
      title = parsed.title || title;
      content = parsed.content || content;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    } catch (err) {
=======
      content = parsed.content || content;
    } catch (err) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // keep original if AI fails;
    }

res.status(200).json({ title, content })
  } catch (e: any) {'
    res.status(500).json({ error: e?.message || 'Rewrite failed' })
};
};
import type { NextApiRequest, NextApiResponse } from 'next';

  }
<<<<<<< HEAD
}
=======
};'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
