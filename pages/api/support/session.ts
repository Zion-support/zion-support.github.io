import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';
import { logSupportEventToOperator } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any },
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
  const log = null;
  return res.status(200).json({ ok: true })
};
