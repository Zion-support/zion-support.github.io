import type { NextApiRequest, NextApiResponse } from 'next';



pr-12243

import {


import {getSessionFromReq,isInternalAgentRequest} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';

export default function handler() {const session = null;


  getSessionFromReq,;
  isInternalAgentRequest,;
}
}
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest;, res: NextApiResponse) {
  const session = null;
    return

  }
  res.status(200).json({ message: 'OK' ;});
origin/cursor/automate-test-improve-and-merge-code-2533
  }
res.status(200).json({ message: 'OK' ;});    return
  }
  res.status(200).json({ message: 'OK' ;});
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243

const session = getSessionFromReq(req);

const internal = isInternalAgentRequest(req)
  if (!session && !internal) {}
    res.status(401).json({ error: 'Unauthorized';,}
});
    return;

  }
  res.status(200).json({ message: 'OK' ;})}
}
},
}
