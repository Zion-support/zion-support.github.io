<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },

  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) {
    // Fallback: return structured placeholders
    const drafted = chapters.map((c) => ({
      title: c.title,
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`})),
    res.status(200).json({ chapters: drafted }),
    return
  }

  const client = new OpenAI({ apiKey }),
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`,

  const drafted = [] as { title: string, content: string }[],
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`,
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt }],
      temperature: 0.7}),
    const text = completion.choices?.[0]?.message?.content || '',
    drafted.push({ title: ch.title, content: text })
  }

  res.status(200).json({ chapters: drafted })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }

  const {_meta, _chapters} = req.body as {_meta: unknown; chapters: { title: string; content?: string}[] };

  const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {_// Fallback: return structured placeholders
    const _drafted = chapters.map(_(c) => ({
      title: c.title, _content: `Draft notes for ${c.title} about ${_meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}));
    res.status(200).json({_chapters: drafted});
    return;
  }

  const _client = new OpenAI({_apiKey});
  const _system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`;

  const _drafted = [] as {_title: string; content: string}[];
  for (const ch of chapters) {_const _prompt = `Book: ${meta.title} — ${_meta.subtitle || ''}\nAuthor: ${_meta.author}\nChapter: ${_ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: system},
        {_role: 'user', _content: prompt}],
      temperature: 0.7});
    const _text = completion.choices?.[0]?.message?.content || '';
    drafted.push({_title: ch.title, _content: text});
  }

  res.status(200).json({_chapters: drafted});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}