<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const { meta, chapters } = req.body as {
    meta: any;
    chapters: { title: string; content?: string }[];
  };
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback: return structured placeholders
<<<<<<< HEAD
    const drafted = chapters.map(c => ({
      title: c.title,
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`,
    }));
    res.status(200).json({ chapters: drafted });
    return;
=======
    const drafted = chapters.map((c) => ({
      title: c.title,
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}));
    res.status(200).json({ chapters: drafted });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const client = new OpenAI({ apiKey });
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`;

<<<<<<< HEAD
  const drafted = [] as { title: string; content: string }[];
   — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
=======
  const drafted = [] as { title: string, content: string }[];
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
<<<<<<< HEAD
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text });
  }

  res.status(200).json({ chapters: drafted });
=======
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
      });
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text })
  }

  res.status(200).json({ chapters: drafted })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
