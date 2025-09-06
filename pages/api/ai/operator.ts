import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip) || 0;
  if (now - lastRequest < 1000) {
    return true;
  }
  rateLimitMap.set(ip, now);
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Auth via Bearer token
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : undefined;
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Rate limit
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too Many Requests' });
  }

  try {
    const { prompt, system, temperature } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const sys =
      system ||
      'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.';

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: typeof temperature === 'number' ? temperature : 0.7,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: prompt },
      ],
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });
  } catch (err: any) {
    console.error('Operator error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}