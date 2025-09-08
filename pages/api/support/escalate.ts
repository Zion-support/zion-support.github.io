import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as {,
    sessionId: string, reason?: string, tag?: string };
  if (!sessionId) return res.status(400).json({,
    error: 'sessionId required' });
  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, sessionId, r,
    eason: reason ?? 'User requested escalation', t,
    ag: tag ?? 'escalate', s,
    tatus: 'open', c,
    reatedAt: Date.now() },
  requests.push(record);
  writeJson('support/requests.json', requests);
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({,
    ok: true, id })
}