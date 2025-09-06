
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
import { AdminActionType } from "../../../../utils/fraud/types";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== "POST") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }
<<<<<<< HEAD
  const { fraudId, action, reason, adminId } = req.body |{}
  if (!fraudId |!action) {
    return res.status(400).json({ error: "Missing fraudId or action" });
=======

  const { fraudId, action, reason, adminId } = req && req.body || {};
  if (!fraudId || !action) {
    return res && res.status(400).json({ error: "Missing fraudId or action" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const store = getFraudStore();
  const fraud = store && store.getById(fraudId);
  if (!fraud) {
    return res && res.status(404).json({ error: "Fraud record not found" });
  }
  const adminAction: AdminActionType = {
<<<<<<< HEAD
    id: `action-${Date.now()}`
    fraudId
    action
    reason
    adminId
    timestamp: new Date().toISOString()
  }
  store.addAdminAction(adminAction);
  return res.status(200).json({ success: true, action: adminAction });
=======
    id: `action-${Date && Date.now()}`,
    fraudId,
    action,
    reason,
    adminId,
    timestamp: new Date().toISOString(),
  };

  store && store.addAdminAction(adminAction);

  return res && res.status(200).json({ success: true, action: adminAction });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

