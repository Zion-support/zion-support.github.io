<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { appendAuditLog } from '../../../utils/api/storage',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  appendAuditLog({ type: 'metrics_view' }),
  const data = [
    { label: 'Monthly Recurring Revenue (MRR)', value: '$220,450', trend: 8.2 },
    { label: 'GMV', value: '$4.8M', trend: 5.1 },
    { label: 'Active users (monthly)', value: 18452, trend: 3.9 },
    { label: 'Active users (TTM)', value: 162340, trend: 12.4 },
    { label: 'Churn rate', value: '2.4%', trend: -0.3 },
    { label: 'CAC/LTV ratio', value: '1:5.6', trend: 0.4 }],
  res.status(200).json(data)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_appendAuditLog({ type: 'metrics_view'});
  const _data = [
    {_label: 'Monthly Recurring Revenue (MRR)', _value: '$220, _450', _trend: 8.2},
    {_label: 'GMV', _value: '$4.8M', _trend: 5.1},
    {_label: 'Active users (monthly)', _value: 18452, _trend: 3.9},
    {_label: 'Active users (TTM)', _value: 162340, _trend: 12.4},
    {_label: 'Churn rate', _value: '2.4%', _trend: -0.3},
    {_label: 'CAC/LTV ratio', _value: '1:5.6', _trend: 0.4}];
  res.status(200).json(data);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}