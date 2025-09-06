import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '../../../utils/fsdb';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../utils/auth';
=======
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
<<<<<<< HEAD
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
=======
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const user = parseUserFromRequest(req);

  if (req.method === 'GET') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    return res.status(200).json({ dispute })
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method Not Allowed');
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    return res.status(200).json({ dispute })
  }

  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
