<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),

// In-memory simple rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000, // 5 minutes
const RATE_LIMIT_MAX_REQUESTS = 15,

const ipToRequests: Record<string { timestamps: number[] }> = {},

function isRateLimited(ip: string): boolean {
  const now = Date.now(),
  const bucket = ipToRequests[ip] || { timestamps: [] },
  // Drop old timestamps
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS),
  const limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS,
  if (!limited) {
    bucket.timestamps.push(now)
  }
  ipToRequests[ip] = bucket,
  return limited
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // Auth via Bearer token
  const authHeader = req.headers.authorization || '',
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined,
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Rate limit
  const ip = (req.headers['x-forwarded-for'] as string)?.split()[0]?.trim() || req.socket.remoteAddress || 'unknown',
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too Many Requests' })
  }

  try {
    const { prompt, system, temperature } = (typeof req.body === 'string') ? JSON.parse(req.body) : req.body,
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' })
    }

    const sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});

// In-memory simple rate limiter (per IP)
const _RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const _RATE_LIMIT_MAX_REQUESTS = 15;

const ipToRequests: Record<string, {_timestamps: number[]}> = {};

function isRateLimited(_ip: string): boolean {_const _now = Date.now();
  const _bucket = ipToRequests[ip] || { timestamps: []};
  // Drop old timestamps
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  const _limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS;
  if (!limited) {_bucket.timestamps.push(now);}
  ipToRequests[ip] = bucket;
  return limited;
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed'});
  }

  // Auth via Bearer token
  const _authHeader = req.headers.authorization || '';
  const _token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {_return res.status(401).json({ error: 'Unauthorized'});
  }

  // Rate limit
  const _ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {_return res.status(429).json({ error: 'Too Many Requests'});
  }

  try {_const { prompt, _system, _temperature} = (typeof req.body === 'string') ? JSON.parse(req.body) : req.body;
    if (!prompt || typeof prompt !== 'string') {_return res.status(400).json({ error: 'Missing prompt'});
    }

    const _sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _completion = await openai.chat.completions.create({_model: 'gpt-4o-mini', _temperature: typeof temperature === 'number' ? temperature : 0.7, _messages: [
        { role: 'system', _content: sys},
        {_role: 'user', _content: prompt}
      ]
    }),

<<<<<<< HEAD
    const text = completion.choices?.[0]?.message?.content ?? '',
    return res.status(200).json({ text })
  } catch (err: any) {
    console.error('Operator error', err),
    return res.status(500).json({ error: 'Internal Server Error' })
=======
    const _text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({_text});
  } catch (err: unknown) {_return res.status(500).json({ error: 'Internal Server Error'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}