import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '../../../utils/fsdb';
<<<<<<< HEAD
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });  const user = parseUserFromRequest(req);

=======
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status($1).json({$2});
  const user = parseUserFromRequest(req);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method === 'GET') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({$2});
    try {
<<<<<<< HEAD
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    }
    return res.status(200).json({ dispute });
  }

  res.setHeader('Allow', 'GET');
<<<<<<< HEAD
  return res.status(405).end('Method Not Allowed');
=======
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
