import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-memory simple rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX_REQUESTS = 15;
const ipToRequests: Record<string, { timestamps: number[] }> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = ipToRequests[ip] || { timestamps: [] };
  
  // Remove old requests outside the window
  requests.timestamps = requests.timestamps.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  
  // Check if limit exceeded
  if (requests.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  // Add current request
  requests.timestamps.push(now);
  ipToRequests[ip] = requests;
  
  return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  
  if (isRateLimited(clientIP as string)) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  try {
    const { prompt, model = 'gpt-3.5-turbo', maxTokens = 1000 } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for Zion Tech Group. Provide accurate, helpful, and professional responses.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: maxTokens,
      temperature: 0.7
    });

    const response = completion.choices[0]?.message?.content || 'No response generated';

    res.status(200).json({
      response,
      model,
      usage: completion.usage
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
}