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
    return res.status(400).json({ error: 'Invalid id' });
=======
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {
<<<<<<< HEAD
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    }
    const { body } = req.body || {};
    if (!body || typeof body !== 'string')
      return res.status(400).json({ error: 'Message body required' });
    const now = new Date().toISOString();
    dispute.messages.push({
      id: `${Date.now()}`,
      authorUserId: user.id,
      authorRole:
        user.role === 'admin'
          ? 'admin'
          : user.id === dispute.clientUserId
            ? 'client'
            : 'talent',
      body,
      createdAt: now,
    });
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const { body } = req.body || {};
    if (!body || typeof body !== 'string') return res.status(400).json({ error: 'Message body required' });
    const now = new Date().toISOString();
    dispute.messages.push({
      id: `${Date.now()}`,
      authorUserId: user.id, authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),
      body,
      createdAt: now});
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
