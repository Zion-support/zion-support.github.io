import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD



import {

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  getSessionFromReq,;
  isInternalAgentRequest,;


} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


<<<<<<< HEAD
    return;
  }

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}


import {
  getSessionFromReq
  isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;
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
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
