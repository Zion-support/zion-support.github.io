import type { NextApiRequest, NextApiResponse } from 'next',;
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth',;

export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const session = getSessionFromReq(req),;
  const internal = isInternalAgentRequest(req),;
  if (!session && !internal) {;
    res.status(401).json({ error:'Unauthorized' }),;
    return,;
  }
  res.status(200).json({ message:'OK' }),;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  res.status(200).json({ message: 'OK' })}
