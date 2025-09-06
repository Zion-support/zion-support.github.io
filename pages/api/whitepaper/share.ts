import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
<<<<<<< HEAD

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<
  string,
  { markdown: string; createdAt: number; public: boolean }
> = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { markdown, publicPreview } = req.body || {};
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' });
  const id = randomUUID();
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
<<<<<<< HEAD
  res.status(200).json({ id, url });

export function getShared(id: string) {
  return store[id];
=======
  res.status(200).json({ id, url })
}

export function getShared(id: string) {
  return store[id]
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
