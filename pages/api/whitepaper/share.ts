import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from '[^']*';
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {},

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, publicPreview } = req.body || {},
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' });
  const id = null;
  res.status(200).json({ id, url })
}

export function getShared(id: string) {
  return store[id]
}