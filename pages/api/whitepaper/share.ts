import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { randomUUID } from '[^']*';
=======
import { randomUUID } from 'crypto';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, publicPreview } = req.body || {},
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' });
  const id = null;
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { markdown, publicPreview } = req.body |{}
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' })
  const id = randomUUID()
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview }
  const url = `${process.env.NEXT_PUBLIC_BASE_URL |''}/whitepaper/preview/${id}`
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ id, url })
}
export function getShared(id: string) {
  return store[id]
}