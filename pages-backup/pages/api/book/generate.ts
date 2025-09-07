<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/generate.ts


import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback: return structured placeholders
    const drafted = chapters.map((c) => ({
      title: c.title
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`
    }));
    res.status(200).json({ chapters: drafted });
    return
  }

  const client = new OpenAI({ apiKey });
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`;

  const drafted = [] as { title: string, content: string }[];
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
<<<<<<< HEAD
<<<<<<< HEAD
        { role: 'system', content: system },
=======
        { role: 'system', content: system }
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
        { role: 'user', content: prompt }
      ]
      temperature: 0.7
    });
    const text = completion.choices?.[0]?.message?.content || '';
=======

<<<<<<< HEAD:pages_backup/api/book/generate.ts

    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };
  const apiKey = null;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text });
  }

  res.status(200).json({ chapters: drafted });
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main
    drafted.push({ title: ch.title, content: text })
  }

  res.status(200).json({ chapters: drafted })
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD:pages_backup/api/book/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' })
    return;
  }
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] }
  const api_key = process.env.OPENAI_API_KEY
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD:pages_backup/api/book/generate.ts



  }
}
    // Fallback: return structured placeholders;
    const drafted = chapters.map ((c) => ({
      title: c.title
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}))
    res.status (200).json ({ chapters: drafted })
    return;
  }
  const client = new OpenAI ({ api_key })
  const system = `You are a book - writing assistant. Write concise but high - signal chapters for a visionary, systems - architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`
  const drafted = [] as { title: string, content: string }[]
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\n_author: ${meta.author}\n_chapter: ${ch.title}\n\n_write 600 - 900 words. Include 1 short quote block if appropriate.`
    const completion = await client.chat.completions.create ({
      model: 'gpt - 4o - mini'
      messages: [;
        { role: 'system', content: system }
        { role: 'user', content: prompt }]
      temperature: 0.7})
    const text = completion.choices?.[0]?.message?.content || ''
    drafted.push ({ title: ch.title, content: text });
  }
  res.status (200).json ({ chapters: drafted });
}
<<<<<<< HEAD:pages_backup/api/book/generate.ts



;
  res.status(200).json({ chapters: drafted });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages_backup/api/book/generate.ts

  res.status(200).json({ chapters: drafted });
};
}

<<<<<<< HEAD:pages_backup/api/book/generate.ts



origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ generated: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
}

}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
