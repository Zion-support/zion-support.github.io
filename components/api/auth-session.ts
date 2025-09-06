<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSessionFromReq,
  isInternalAgentRequest,
} from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res.status(200).json({ message: 'OK' });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
