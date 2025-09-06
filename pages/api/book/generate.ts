<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
=======
const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };
  const apiKey = process.env.OPENAI_API_KEY;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next',;
import OpenAI from 'openai',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  }
<<<<<<< HEAD
=======


    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [


    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

=======
=======
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] }
  const apiKey = process.env.OPENAI_API_KEY
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (!apiKey) {
    // Fallback: return structured placeholders
    const drafted = chapters.map((c) => ({
      title: c.title
      content: `Draft notes for ${c.title} about ${meta?.title |'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}))
    res.status(200).json({ chapters: drafted })
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
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
      });
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },
  const api_key = process.env.OPENAI_API_KEY,
  // Check condition
if ( {) {
  $2
=======


  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    // Fallback: return structured placeholders;
    const drafted = chapters.map ((c) => ({
      title: c.title,
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`})),
    res.status (200).json ({ chapters: drafted }),
    return;
  }
  const client = new OpenAI ({ api_key }),
  const system = `You are a book - writing assistant. Write concise but high - signal chapters for a visionary, systems - architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`,
  const drafted = [] as { title: string, content: string }[],
  for (const ch of chapters) {
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\n_author: ${meta.author}\n_chapter: ${ch.title}\n\n_write 600 - 900 words. Include 1 short quote block if appropriate.`,
    const completion = await client.chat.completions.create ({
      model: 'gpt - 4o - mini',
      messages: [;
        { role: 'system', content: system },
        { role: 'user', content: prompt }],
      temperature: 0.7}),
    const text = completion.choices?.[0]?.message?.content || '',
    drafted.push ({ title: ch.title, content: text });
  }
  res.status (200).json ({ chapters: drafted });
}
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {;
    // Fallback: return structured placeholders;
    const drafted = chapters.map((c) => ({;
      title: c.title;
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`}));
    res.status(200).json({ chapters: drafted });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const client = new OpenAI({ apiKey });
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`,;
  const drafted = [] as { title: string, content: string }[],;
  for (const ch of chapters) {;
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\nAuthor: ${meta.author}\nChapter: ${ch.title}\n\nWrite 600-900 words. Include 1 short quote block if appropriate.`;
    const completion = await client.chat.completions.create({;
      model: 'gpt-4o-mini';
      messages: [;
        { role: 'system', content: system },;
        { role: 'user', content: prompt }],;
      temperature: 0.7});
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  res.status(200).json({ chapters: drafted });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

  res.status(200).json({ chapters: drafted });
};
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
