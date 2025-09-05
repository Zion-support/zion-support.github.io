<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getFraudStore } from '../../../../utils/fraud/store',
import { AdminActionType } from '../../../../utils/fraud/types',
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'],
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured
  return token === process.env.ADMIN_TOKEN
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' }),
    return
  }

  const { fraudId, action, reason, adminId } = req.body || {},
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' }),
    return
  }

  const act = (action as string).toUpperCase() as AdminActionType,
  if (!['SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' }),
    return
  }

  const store = getFraudStore(),
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null }),
  const newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED',
  await store.updateEventStatus(fraudId, newStatus),

  res.status(200).json({ ok: true, status: newStatus })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

function ensureAdmin(_req: NextApiRequest): boolean {_const _token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }
  if (!ensureAdmin(req)) {_res.status(401).json({ error: 'Unauthorized'});
    return;
  }

  const {_fraudId, _action, _reason, _adminId} = req.body || {};
  if (!fraudId || !action) {_res.status(400).json({ error: 'Missing fraudId or action'});
    return;
  }

  const _act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPEND', 'WARN', 'IGNORE'].includes(act)) {_res.status(400).json({ error: 'Invalid action'});
    return;
  }

  const _store = getFraudStore();
  await store.recordAction({_fraudId, _action: act, _adminId: adminId || null, _reason: reason || null});
  const _newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

  res.status(200).json({_ok: true, _status: newStatus});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}