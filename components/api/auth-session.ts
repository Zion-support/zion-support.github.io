import type { NextApiRequest, NextApiResponse } from 'next';



import {
<<<<<<< HEAD


  getSessionFromReq,;
  isInternalAgentRequest,;


=======
<<<<<<< HEAD
  getSessionFromReq
  isInternalAgentRequest;
=======
  getSessionFromReq,;
  isInternalAgentRequest,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
