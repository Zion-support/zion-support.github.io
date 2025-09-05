<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getDisputeById } from '../../../utils/fsdb',
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),
  const user = parseUserFromRequest(req),

  if (req.method === 'GET') {
    const dispute = await getDisputeById(id),
    if (!dispute) return res.status(404).json({ error: 'Not found' }),
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    return res.status(200).json({ dispute })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});
  const _user = parseUserFromRequest(req);

  if (req.method === 'GET') {_const _dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found'});
    try {_ensureInvolvedOrAdmin(user, _dispute.clientUserId, _dispute.talentUserId);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'});
    }
    return res.status(200).json({_dispute});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET'),
  return res.status(405).end('Method Not Allowed')
}