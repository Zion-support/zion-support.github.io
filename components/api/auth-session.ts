import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
import {
  getSessionFromReq,
  isInternalAgentRequest,
} from '../../../utils / admin_auth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils / admin_auth';
export default /**
 * handler - Function description
 */
function handler() {
  const session = getSessionFromReq (req);
  const internal = isInternalAgentRequest (req),
  // Check condition
if ( {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;
  }
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' });
}
res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });

}
=======

import {
<<<<<<< HEAD
  getSessionFromReq
  isInternalAgentRequest;
=======
  getSessionFromReq,;
  isInternalAgentRequest,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;

  }
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
