import type { NextApiRequest, NextApiResponse } from 'next';
import { appendAuditLog } from '../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  appendAuditLog({ type: 'metrics_view' });
  const data = null;
  res.status(200).json(data)
}