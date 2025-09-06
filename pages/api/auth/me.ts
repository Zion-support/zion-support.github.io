import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null }),
  res.status(200).json({ user })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}