import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getSessionFromReq, isInternalAgentRequest } from '../../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = getSessionFromReq(req);
  
  if (isInternalAgentRequest(req)) {
    return res.status(200).json({ message: 'Internal agent request' });
  }

  res.status(200).json({ message: 'OK', session });
}
=======
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req)
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  res.status(200).json({ message: 'OK' })
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
