import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import {
  getSessionFromReq
  isInternalAgentRequest;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
<<<<<<< HEAD
    res && res.status(401).json({ error: 'Unauthorized' });
    return;

  }
<<<<<<< HEAD
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });
}
=======
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
