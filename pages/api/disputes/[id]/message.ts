import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
<<<<<<< HEAD
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });  const user = parseUserFromRequest(req);

=======
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status($1).json({$2});
  const user = parseUserFromRequest(req);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({$2});
    try {
<<<<<<< HEAD
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    }
    const { body } = req.body || {};
    if (!body || typeof body !== 'string')
      return res.status(400).json({ error: 'Message body required' });
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const { body } = req.body || {};
    if (!body || typeof body !== 'string') return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const now = new Date().toISOString();
    dispute.messages.push({
      id: `${Date.now()}`,
      authorUserId: user.id,
<<<<<<< HEAD
      authorRole:
        user.role === 'admin'
          ? 'admin'
          : user.id === dispute.clientUserId
            ? 'client'
            : 'talent',
      body,
      createdAt: now,
=======
      authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),
      body,
      createdAt: now
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    });
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
=======
  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
