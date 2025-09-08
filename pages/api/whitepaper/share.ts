import type { NextApiRequest, NextApiResponse } from 'next',;
import { randomUUID } from 'crypto',;
// In-memory store for demo purposes. Replace with persistent storage in production.
const,
    store: Record<string, {,
    markdown: string, c,
    reatedAt: number, p,
    ublic: boolean }> = {};
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { markdown, publicPreview } = req.body || {};
  if (!markdown) return res.status(400).json({,
    error: 'Missing markdown' });
  const id = randomUUID();
  store[id] = { markdown, c,
    reatedAt: Date.now(), p,
    ublic: !!publicPreview },
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
  res.status(200).json({ id, url })
}

export function getShared(,
    id: string) {
  return store[id]
};