import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' })
}

export default function handler() {const session = null;



}
import type { NextApiRequest, NextApiResponse } from 'next';



import {




  }



pr-12243

  getSessionFromReq,;
  isInternalAgentRequest,;
}
}
} from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
    return

import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest;, res: NextApiResponse) {
  const session = null;
    return

   ;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {

    return;
  }



}

}
