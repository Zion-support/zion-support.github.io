import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
import {


=======

import {


import {

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

  getSessionFromReq,;
  isInternalAgentRequest,;


} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
<<<<<<< HEAD
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
    return
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {

<<<<<<< HEAD
=======

    return;
  }

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}

<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;

  }
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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
<<<<<<< HEAD
return;
  }
  res.status(200).json({ message: 'OK' });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    return;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });
}
<<<<<<< HEAD


origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
