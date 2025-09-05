<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJson, writeJson } from '../../../utils/fsDb',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const requests = readJson<any[]>('support/requests.json', []),
    return res.status(200).json({ requests })
  }
  if (req.method === 'POST') {
    const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },
    const requests = readJson<any[]>('support/requests.json', []),
    const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`,
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() },
    requests.push(record),
    writeJson('support/requests.json', requests),
    return res.status(200).json({ ok: true, id })
  }
  return res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const _requests = readJson<any[]>('support/requests.json', _[]);
    return res.status(200).json({ requests});
  }
  if (req.method === 'POST') {_const { sessionId, _reason, _tag} = req.body as {_sessionId: string; reason?: string; tag?: string};
    const _requests = readJson<any[]>('support/requests.json', []);
    const _id = `sr_${_Math.random().toString(36).slice(2)}_${_Date.now()}`;
    const _record = {_id, _sessionId, _reason: reason ?? 'User request', _tag: tag ?? 'manual', _status: 'open', _createdAt: Date.now()};
    requests.push(record);
    writeJson('support/requests.json', requests);
    return res.status(200).json({_ok: true, _id});
  }
  return res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}