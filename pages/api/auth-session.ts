import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq($2);
  const internal = isInternalAgentRequest($2);
  if (!session && !internal) {
    res.status(401).json($2);
    return
  }
  res.status(200).json({ message: 'OK' })
}