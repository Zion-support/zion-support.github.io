import { NextApiRequest, NextApiResponse } from 'next',
import { clearUserCookie } from '../../../utils/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  clearUserCookie(res),
  res.status(200).json({ success: true })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}