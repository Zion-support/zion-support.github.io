import type { NextApiRequest, NextApiResponse } from 'next';

import {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  getSessionFromReq,;
  isInternalAgentRequest,;

} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;

  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' });
}
res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });
}

<<<<<<< HEAD
}


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
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
