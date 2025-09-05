<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJson, writeJson } from '../../../utils/fsDb',
import { tagOperatorSession } from '../../../utils/operator',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' }),

  const requests = readJson<any[]>('support/requests.json', []),
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`,
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() },
  requests.push(record),
  writeJson('support/requests.json', requests),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_sessionId, _reason, _tag} = req.body as {_sessionId: string; reason?: string; tag?: string};
  if (!sessionId) return res.status(400).json({_error: 'sessionId required'});

  const _requests = readJson<any[]>('support/requests.json', []);
  const _id = `sr_${_Math.random().toString(36).slice(2)}_${_Date.now()}`;
  const _record = {_id, _sessionId, _reason: reason ?? 'User requested escalation', _tag: tag ?? 'escalate', _status: 'open', _createdAt: Date.now()};
  requests.push(record);
  writeJson('support/requests.json', requests);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  await tagOperatorSession(sessionId, tag ?? 'escalate'),

<<<<<<< HEAD
  return res.status(200).json({ ok: true, id })
=======
  return res.status(200).json({_ok: true, _id});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}