import type { NextApiRequest, NextApiResponse } from 'next';
import { parseAdminFromRequest } from '../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = parseAdminFromRequest(req);
  if (!admin) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res.status(200).json({ message: 'OK', admin });
}