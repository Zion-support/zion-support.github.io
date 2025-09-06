import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-memory simple rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX_REQUESTS = 15;

const ipToRequests: Record<string, { timestamps: number[] }> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = ipToRequests[ip] || { timestamps: [] };
  // Drop old timestamps
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  const limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS;
  if (!limited) {
    bucket.timestamps.push(now);
  }
  ipToRequests[ip] = bucket;
  return limited;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') as string;
  
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  try {
    const { prompt, context } = req.body;
    
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an AI operator assistant. Provide helpful, accurate, and concise responses.'
        },
        {
          role: 'user',
          content: context ? `${context}\n\n${prompt}` : prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    const content = response.choices[0]?.message?.content || 'No response generated';
    
    res.status(200).json({ 
      response: content,
      usage: response.usage 
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error.message 
    });
  }
}