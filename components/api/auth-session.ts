import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
    return;
  }
  res.status(200).json({ message: 'OK' });
=======
    return
  }
  res.status(200).json({ message: 'OK' });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
