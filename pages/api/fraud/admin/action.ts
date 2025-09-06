import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
    return;
=======
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' });
<<<<<<< HEAD
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return
  }

  const store = getFraudStore();
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null });
  const newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

<<<<<<< HEAD
  res.status(200).json({ ok: true, status: newStatus });
=======
    return
  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return
  }

  const store = getFraudStore();
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null });
  const newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

  res.status(200).json({ ok: true, status: newStatus })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true, status: newStatus })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
