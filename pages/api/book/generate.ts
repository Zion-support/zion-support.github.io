import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {

    res.status(405).json({ error: 'Method not allowed' })
    return
  }
<<<<<<< HEAD
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] }
  const apiKey = process.env.OPENAI_API_KEY
=======

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };

  const apiKey = process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!apiKey) {
    // Fallback: return structured placeholders
    const drafted = chapters.map((c) => ({
      title: c.title
      content: `Draft notes for ${c.title} about ${meta?.title |'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}))
    res.status(200).json({ chapters: drafted })
    return
  }
<<<<<<< HEAD
  const client = new OpenAI({ apiKey })
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`
  const drafted = [] as { title: string, content: string }[]
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle |''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`
=======

  const client = new OpenAI({ apiKey });
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`;

  const drafted = [] as { title: string, content: string }[];
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
<<<<<<< HEAD
        { role: 'system', content: system }
        { role: 'user', content: prompt }]
      temperature: 0.7})
    const text = completion.choices?.[0]?.message?.content |''

=======
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
      });
    const text = completion.choices?.[0]?.message?.content || '';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
