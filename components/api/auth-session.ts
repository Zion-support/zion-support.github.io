import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
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
=======
    return
  }
  res.status(200).json({ message: 'OK' });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
