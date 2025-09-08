import type { NextApiRequest, NextApiResponse } from 'next';



import {


import {


  getSessionFromReq,;
  isInternalAgentRequest,;
}
}
} from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
    return

} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


    return;
  }

  res && res.status(200).json({ message: 'OK' });    return
res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });
}

}
