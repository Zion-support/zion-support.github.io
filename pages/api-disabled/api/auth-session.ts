<<<<<<< HEAD:pages/api/auth-session.ts

=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';
pr-12243
>>>>>>> origin/main:pages/api-disabled/api/auth-session.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth'
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req)
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  res.status(200).json({ message: 'OK' });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';
export default function handler(req, res) {
  try {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;
}
  res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




  res.status(200).json({ message: 'OK' })
};
import { getSessionFromReq, isInternalAgentRequest } from '../../utils/auth';

<<<<<<< HEAD:pages/api/auth-session.ts

=======
>>>>>>> origin/main:pages/api-disabled/api/auth-session.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
<<<<<<< HEAD:pages/api/auth-session.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
=======
>>>>>>> origin/main:pages/api-disabled/api/auth-session.ts
  res.status(200).json({ message: 'OK' });

}
<<<<<<< HEAD:pages/api/auth-session.ts

=======

  const session = getSessionFromReq(req);
  
  if (isInternalAgentRequest(req)) {
    return res.status(200).json({ message: 'Internal agent request' });
  }

  res.status(200).json({ message: 'OK', session });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main:pages/api-disabled/api/auth-session.ts
