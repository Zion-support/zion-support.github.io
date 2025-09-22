import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';

const client = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { content, tone, targetAudience } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const prompt = `Rewrite the following content for a ${targetAudience || 'general'} audience with a ${tone || 'professional'} tone:

${content}

Please make it more engaging and clear while maintaining the original meaning.`;

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional content writer who specializes in creating engaging, clear, and compelling content."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    const rewrittenContent = completion.choices[0]?.message?.content || content;

    res.status(200).json({ 
      originalContent: content,
      rewrittenContent,
      tone: tone || 'professional',
      targetAudience: targetAudience || 'general'
    });
  } catch (error) {
    console.error('Error rewriting content:', error);
    res.status(500).json({ error: 'Failed to rewrite content' });
  }
}