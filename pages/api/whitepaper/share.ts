import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string; { markdown: string, createdAt: number, public: boolean }> = {},
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2}),
  const { markdown, publicPreview } = req.body || {},
  if (!markdown) return res.status($1).json({$2}),
  const id = randomUUID(),
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview },
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`,
  res.status(200).json({ id, url })
}

export function getShared(id: string) {
  return store[id]
}