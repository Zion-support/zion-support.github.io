

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth',;
import OpenAI from 'openai',;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY })

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      content = parsed.content || content

    } catch (err) {
      // keep original if AI fails;
    }

    res.status(200).json({ title, content })
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Rewrite failed' })

