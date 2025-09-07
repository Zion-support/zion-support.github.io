<<<<<<< HEAD:pages/api/whitepaper/share.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement share logic
    res.status(200).json({ message: 'share endpoint' });
  } catch (error) {
    console.error('Error in share:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',;

import { randomUUID } from 'crypto',;
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {},

export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { markdown, publicPreview } = req.body || {},'
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' }),
  const id = randomUUID(),
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview },'
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`,

import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto',;

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  res.status(200).json({ id, url })
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/whitepaper/share.ts
}