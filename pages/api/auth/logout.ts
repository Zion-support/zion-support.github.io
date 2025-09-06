import { NextApiRequest, NextApiResponse } from 'next';
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  clearUserCookie(res);
  res.status(200).json({ success: true })
}