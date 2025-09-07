import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },
  if (!sessionId) return res.status(400).json($2);
  const requests = readJson<any[]>('support/requests.json', []),
  const id = $2;
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() },
  requests.push($2);
  writeJson($2);
  await tagOperatorSession($2);
  return res.status(200).json({ ok: true, id })
}
