<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD:pages/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };
  const apiKey = process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import OpenAI from 'openai',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
<<<<<<< HEAD
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/generate.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [

<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts

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
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
}
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/generate.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts
export default async /**
 * handler - Function description
=======

import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';
export default async function handler() { return null; }
  if (req.method !== 'POST') {}
    const completion = await client.chat.completions.create({'
      model: 'gpt-4o-mini'
      messages: []
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })

}
'
import type { NextApiRequest, NextApiResponse } from 'next','
import OpenAI from 'openai',;
export default async /**;
 * handler - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },
  const api_key = process.env.OPENAI_API_KEY,
<<<<<<< HEAD:pages_backup/api/book/generate.ts
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/generate.ts
<<<<<<< HEAD
=======
=======
}

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] }
  const apiKey = process.env.OPENAI_API_KEY
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
<<<<<<< HEAD
=======
=======
  // Check condition;
if ( {) {}
  $2;
}

'
import type { NextApiRequest, NextApiResponse } from 'next','
import OpenAI from 'openai',
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },
  const api_key = process.env.OPENAI_API_KEY,
<<<<<<< HEAD:pages_backup/api/book/generate.ts
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  // Check condition;
if ( {) {}
  $2;
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
}
    // Fallback: return structured placeholders;
    const drafted = chapters.map ((c) => ({}
      title: c.title,'
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`})),
    res.status (200).json ({ chapters: drafted }),
    return;
  }
  const client = new OpenAI ({ api_key }),`
  const system = `You are a book - writing assistant. Write concise but high - signal chapters for a visionary, systems - architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`,
  const drafted = [] as { title: string, content: string }[],
  for (const ch of chapters) {'`
    const prompt = `Book: ${meta.title} — ${meta.subtitle || ''}\n_author: ${meta.author}\n_chapter: ${ch.title}\n\n_write 600 - 900 words. Include 1 short quote block if appropriate.`,
    const completion = await client.chat.completions.create ({'
      model: 'gpt - 4o - mini',
      messages: [;'
        { role: 'system', content: system },'
        { role: 'user', content: prompt }],
      temperature: 0.7}),'
    const text = completion.choices?.[0]?.message?.content || '',
    drafted.push ({ title: ch.title, content: text });
  }
  res.status (200).json ({ chapters: drafted });
}
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD:pages/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts
;
  res.status(200).json({ chapters: drafted });
  } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
;
  res.status(200).json({ chapters: drafted });
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD:pages/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts


<<<<<<< HEAD:pages_backup/api/book/generate.ts
=======
}

  res.status(200).json({ chapters: drafted });
};
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts
  res.status(200).json({ chapters: drafted });
};
}

<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/generate.ts
<<<<<<< HEAD:pages/api/book/generate.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/generate.ts
=======




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/book/generate.ts
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/book/generate.ts
