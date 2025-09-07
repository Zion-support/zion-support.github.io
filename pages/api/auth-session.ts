import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '../../utils/adminAuth';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  
  if (!session && !internal) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  res.status(200).json({ 
    authenticated: true, 
    session: session || 'internal',
    internal 
  });
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
