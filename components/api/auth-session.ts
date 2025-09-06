import type { NextApiRequest, NextApiResponse } from 'next';



import {
<<<<<<< HEAD
  getSessionFromReq
  isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;
=======


  getSessionFromReq,;
  isInternalAgentRequest,;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


    return;
  }

  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}

=======
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });
}
