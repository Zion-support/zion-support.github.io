import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto',;
import type { NextApiRequest, NextApiResponse } from 'next';
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
  const { markdown, publicPreview } = req.body || {};
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' });
  const id = randomUUID();
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
res.status(200).json({ id, url });

export function getShared(id: string) {
  return store[id];

}}
origin/cursor/automate-test-improve-and-merge-code-2533
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`
main

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, publicPreview } = req.body || {},
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' });
  const id = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  res.status(200).json({ id, url })
}
export function getShared(id: string) {
  return store[id]
};

}
origin/cursor/automate-test-improve-and-merge-code-2533
