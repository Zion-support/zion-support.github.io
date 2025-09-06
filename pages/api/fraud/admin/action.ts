import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  if (!ensureAdmin(req)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }

  const { action, targetId, reason } = req.body || {};
  
  if (!action || !targetId) {
    res.status(400).json({ error: 'Missing action or targetId' });
    return;
  }

  try {
    const store = getFraudStore();
    const result = await store.performAdminAction({
      type: action as AdminActionType,
      targetId,
      reason,
      adminId: 'admin', // TODO: Get from auth
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true, result });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to perform action' });
  }
}