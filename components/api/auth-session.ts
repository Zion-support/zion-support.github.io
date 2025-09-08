import type { NextApiRequest, NextApiResponse } from 'next';

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
  if (!session && !internal) {    res.status(401).json({ error: 'Unauthorized' });
    return
  }

});
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}

}

