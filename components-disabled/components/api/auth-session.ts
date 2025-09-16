import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/auth-session.ts
}
=======
import {getSessionFromReq,isInternalAgentRequest} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
export default function handler() {const session = null;



import {




  getSessionFromReq,;
  isInternalAgentRequest,;


} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


    return;
export default function handler() {const session = getSessionFromReq(req)const internal = isInternalAgentRequest(req)if (!session && !internal) {return;
  }res && res.status(200).json({ message: 'OK' })return;
  }
  res && res.status(200).json({ message: 'OK' })}}
    res.status (401).json ({ error: 'Unauthorized' })return;}
    res.status(401).json({ error: 'Unauthorized' })return;
  }
  res.status(200).json({ message: 'OK' })}
res.status (200).json ({ message: 'OK' })return;
  }
  res.status (200).json ({ message: 'OK' })}}ursor/fix-website-loading-errors-and-merge-6662;
}}getSessionFromReq;
  isInternalAgentRequest;
  getSessionFromReq,isInternalAgentRequest} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
export default function handler() {const session = getSessionFromReq(req)const internal = isInternalAgentRequest(req)if (!session && !internal) {res.status(401).json({ error: 'Unauthorized' })return;return;return;
  }
  res.status(200).json({ message: 'OK' })}
res.status(200).json({ message: 'OK' })return;

  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}

}
    res.status (401).json ({ error: 'Unauthorized' });
    return;

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

}


}


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
  res.status(200).json({ message: 'OK' })}
}
}
}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/auth-session.ts
