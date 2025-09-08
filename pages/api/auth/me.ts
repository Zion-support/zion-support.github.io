import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({,
    user: null });
  res.status(200).json({ user })
}