<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendAuditLog } from '../../../utils/api/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  appendAuditLog({ type: 'metrics_view' });
  const data = [
    { label: 'Monthly Recurring Revenue (MRR)', value: '$220,450', trend: 8.2 },
    { label: 'GMV', value: '$4.8M', trend: 5.1 },
    { label: 'Active users (monthly)', value: 18452, trend: 3.9 },
    { label: 'Active users (TTM)', value: 162340, trend: 12.4 },
    { label: 'Churn rate', value: '2.4%', trend: -0.3 },
    { label: 'CAC/LTV ratio', value: '1:5.6', trend: 0.4 },
  ];
  res.status(200).json(data);
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
