import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { slide } = req.body;
    
    if (!slide || !slide.title || !slide.content) {
      return res.status(400).json({ error: 'Slide data is required' });
    }

    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}
Content: ${slide.content}`;

    let title = slide.title;
    let content = slide.content;

    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      });

      const response = chat.choices[0]?.message?.content;
      if (response) {
        const parsed = JSON.parse(response);
        title = parsed.title || title;
        content = parsed.content || content;
      }
    } catch (err) {
      // Keep original if AI fails
      console.error('AI rewrite failed:', err);
    }

    return res.status(200).json({ title, content });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}