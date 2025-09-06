import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  try {
    const { title, content } = req.body || {};
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
    
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a professional content rewriter. Improve the given content while maintaining the original meaning.' },
        { role: 'user', content: `Title: ${title}\nContent: ${content}` }
      ],
      max_tokens: 500
    });
    
    const rewrittenContent = response.choices[0]?.message?.content || content;
    return res.status(200).json({ title, content: rewrittenContent });
  } catch (error) {
    return res.status(500).json({ error: 'Rewrite failed' });
  }
};
