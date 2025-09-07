import type { NextApiRequest, NextApiResponse } from 'next';
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end($2);
  const { payload, message, signature } = req.body || {},
  if (!payload || !payload.address) return res.status(400).json($2);
  const key = $2;
  store[key] = { payload, message, signature, updatedAt: Date.now() },
  return res.status(200).json({ ok: true})
}