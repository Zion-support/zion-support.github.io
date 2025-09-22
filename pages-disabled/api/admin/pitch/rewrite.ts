<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY })
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY })


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  try {
    const { title, content } = req.body || {};
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
    
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a professional content rewriter. Improve the given content while maintaining the original meaning.' },
        { role: 'user', content: `Title: ${title}\nContent: ${content}` }
      ],
      max_tokens: 500
    });
    
    const rewrittenContent = response.choices[0]?.message?.content || content;
    return res.status(200).json({ title, content: rewrittenContent });
  } catch (error) {
    return res.status(500).json({ error: 'Rewrite failed' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' },
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import { ensureAdminFromApi } from '../../../../utils/auth',;'
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),


'
import type { NextApiRequest, NextApiResponse } from 'next',;'
import { ensureAdminFromApi } from '../../../../utils/auth',;'
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),




  try {}
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.`
Title: ${slide.title}\nContent:\n${slide.content}`,

    let title = slide.title,
    let content = slide.content,
    try {}
      const chat = await client.chat.completions.create({'
        model: 'gpt-4o-mini'
        messages: ['
          { role: 'system', content: 'You rewrite concise investor content and return JSON only.' },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          { role: 'user', content: prompt }],
        temperature: 0.6,'
        response_format: { type: 'json_object' } as any}),'
      const raw = chat.choices?.[0]?.message?.content || '{}',
      const parsed = JSON.parse(raw),
      title = parsed.title || title,
<<<<<<< HEAD
=======
>>>>>>> pr-12243
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

<<<<<<< HEAD
    res.status(200).json({ title, content })
  } catch (e: any) {'
    res.status(500).json({ error: e?.message || 'Rewrite failed' })
<<<<<<< HEAD
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';


  }
<<<<<<< HEAD
}
=======
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
res.status(200).json({ title, content });
  } catch (e: any) {
    res.status(500).json({ error: e?.message |'Rewrite failed' })
  }

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
};'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
