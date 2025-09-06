import { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    return res.status(400).json({ error: 'fraudId and action are required' });
  }

  try {
    const store = getFraudStore();
    const record = store.getRecord(fraudId);
    
    if (!record) {
      return res.status(404).json({ error: 'Fraud record not found' });
    }

    const updatedRecord = store.updateRecord(fraudId, {
      status: action === 'resolve' ? 'resolved' : 
              action === 'dismiss' ? 'false_positive' : 
              'investigating',
      adminId,
      resolution: reason
    });

    return res.status(200).json({
      success: true,
      record: updatedRecord
    });
  } catch (error) {
    console.error('Fraud action error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}