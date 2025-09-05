<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',;
import { clearUserCookie } from '../../../utils/auth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  clearUserCookie(res),;
  res.status(200).json({ success:true }),;
}
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { clearUserCookie } from '../../../utils/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  clearUserCookie(res),
  res.status(200).json({ success: true })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
