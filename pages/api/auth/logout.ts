import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { clearUserCookie } from '../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
=======
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ success: true })
}
=======
import { clearUserCookie } from '../../../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
