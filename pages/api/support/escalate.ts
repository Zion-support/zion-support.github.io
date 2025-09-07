import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string }
  if (!sessionId) return res.status(400).json({ error: "Invalid request" });
  const requests = readJson<any[]>('support/requests.json', [])
  const id = { error: "Invalid request" };
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() }
  requests.push({ error: "Invalid request" });
  writeJson({ error: "Invalid request" });
  await tagOperatorSession({ error: "Invalid request" });
  return res.status(200).json({ ok: true, id })
}

}