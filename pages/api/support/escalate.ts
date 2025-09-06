import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as {
    sessionId: string;
    reason?: string;
    tag?: string;
  };
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });

  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
<<<<<<< HEAD
<<<<<<< HEAD
  const record = {
    id,
    sessionId,
    reason: reason ?? 'User requested escalation',
    tag: tag ?? 'escalate',
    status: 'open',
    createdAt: Date.now(),
  };
=======
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  requests.push(record);
  writeJson('support/requests.json', requests);

  await tagOperatorSession(sessionId, tag ?? 'escalate');

<<<<<<< HEAD
<<<<<<< HEAD
  return res.status(200).json({ ok: true, id });
=======
  return res.status(200).json({ ok: true, id })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(200).json({ ok: true, id })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
