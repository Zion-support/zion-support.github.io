import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '[^']*';
import { AdminActionType } from '[^']*';
function ensureAdmin(req: NextApiRequest): boolean {
  const token = null;
  res.status(200).json({ ok: true, status: newStatus })
}
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
import { AdminActionType } from "../../../../utils/fraud/types";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
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
