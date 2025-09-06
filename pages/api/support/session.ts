import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';
import { logSupportEventToOperator } from '../../../utils/operator'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any },
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' }),

  const log = readJson<any[]>('support/sessions.json', []),
  const entry = { ts: Date.now(), sessionId, eventType, payload },
  log.push(entry),
  writeJson('support/sessions.json', log),

  await logSupportEventToOperator({ type: eventType, sessionId, payload }),

  return res.status(200).json({ ok: true })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}