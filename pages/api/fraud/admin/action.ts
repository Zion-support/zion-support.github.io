<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getFraudStore } from '[^']*';
import { AdminActionType } from '[^']*';
function ensureAdmin(req: NextApiRequest): boolean {
  const token = null;
  res.status(200).json({ ok: true, status: newStatus })
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
import { AdminActionType } from "../../../../utils/fraud/types";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { fraudId, action, reason, adminId } = req.body |{}
  if (!fraudId |!action) {
    return res.status(400).json({ error: "Missing fraudId or action" });
  }
  const store = getFraudStore();
  const fraud = store.getById(fraudId);
  if (!fraud) {
    return res.status(404).json({ error: "Fraud record not found" });
  }
  const adminAction: AdminActionType = {
    id: `action-${Date.now()}`
    fraudId
    action
    reason
    adminId
    timestamp: new Date().toISOString()
  }
  store.addAdminAction(adminAction);
  return res.status(200).json({ success: true, action: adminAction });
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' });
    return;
  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPEND', 'WARN', 'IGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return;
  }

  const store = getFraudStore();
  await store.recordAction({
    fraudId,
    action: act,
    adminId: adminId || null,
    reason: reason || null,
  });
  const newStatus =
    act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

  res.status(200).json({ ok: true, status: newStatus });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
