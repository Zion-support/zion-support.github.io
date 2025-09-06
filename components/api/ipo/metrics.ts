import type { NextApiRequest, NextApiResponse } from 'next';

{ label: 'CAC / LTV ratio', value: '1:5.6', trend: 0.4 },
import { appendAuditLog } from '../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  appendAuditLog({ type: 'metrics_view' });

  const data = [
    { label: 'Monthly Recurring Revenue (MRR)', value: '$220,450', trend: 8.2 }

    { label: 'CAC / LTV ratio', value: '1:5.6', trend: 0.4 }];
  res.status (200).json (data);
}


}




