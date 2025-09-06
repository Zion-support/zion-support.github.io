import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';
import { tagOperatorSession } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });
  const requests = null;
  return res.status(200).json({ ok: true, id })
}
