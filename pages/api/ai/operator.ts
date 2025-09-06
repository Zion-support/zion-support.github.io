import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { sys, prompt, temperature } = req.body;
      
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: typeof temperature === 'number' ? temperature : 0.7,
        messages: [
          {
            role: 'system',
            content: sys
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      });
      
      res.status(200).json({ completion });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}