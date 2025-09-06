import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res.status(200).json({ message: 'OK' });
=======
    return
  }
  res.status(200).json({ message: 'OK' });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
