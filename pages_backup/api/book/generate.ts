<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {



    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
}
<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/generate.ts
;
  res.status(200).json({ chapters: drafted });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/generate.ts
  res.status(200).json({ chapters: drafted });
};
}



<<<<<<< HEAD:pages_backup/api/book/generate.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/book/generate.ts
