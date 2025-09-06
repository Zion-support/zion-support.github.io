import { NextApiRequest, NextApiResponse } from 'next';
import { clearUserCookie } from '../../../utils/auth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  clearUserCookie(res);
  res.status(200).json({ success: true })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}