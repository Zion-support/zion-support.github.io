import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any },
  if (!sessionId || !eventType) return res.status(400).json($2);
  const log = readJson<any[]>('support/sessions.json', []),
  const entry = { ts: Date.now(), sessionId, eventType, payload },
  log.push($2);
  writeJson($2);
  await logSupportEventToOperator($2);
  return res.status(200).json({ ok: true})
}