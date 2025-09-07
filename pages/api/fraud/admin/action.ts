import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
function ensureAdmin(req: NextApiRequest): boolean {
  const token = $2;
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured
  return token === process.env.ADMIN_TOKEN
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json($2);
    return
  }

  const { fraudId, action, reason, adminId } = req.body || {},
  if (!fraudId || !action) {
    res.status(400).json($2);
    return
  }

  const act = $2;
  if (!['SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json($2);
    return
  }

  const store = getFraudStore($2);
  await store.recordAction($2);
  const newStatus = $2;
  await store.updateEventStatus($2);
  res.status(200).json({ ok: true, status: newStatus})
}