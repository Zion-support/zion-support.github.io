import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {getSessionFromReq,isInternalAgentRequest} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';
export default function handler() {const session = null;



import {




  getSessionFromReq,;
  isInternalAgentRequest,;


=======
import {
  getSessionFromReq,;
  isInternalAgentRequest,;
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
<<<<<<< HEAD


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

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
<<<<<<< HEAD
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
=======
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
