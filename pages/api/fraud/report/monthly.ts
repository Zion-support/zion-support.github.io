import { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { month } = req.query;
    
    if (!month || Array.isArray(month)) {
      return res.status(400).json({ error: 'Month parameter is required' });
    }

    const store = getFraudStore();
    const report = await store.generateMonthlyReport(month);
    
    res.status(200).json(report);
  } catch (error) {
    console.error('Monthly report error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}