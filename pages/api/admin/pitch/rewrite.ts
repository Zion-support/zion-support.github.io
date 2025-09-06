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


  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`
    let title = slide.title
    let content = slide.content
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch (err) {
      // keep original if AI fails;
    }
res.status(200).json({ title, content })
  } catch (e: any) {
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
