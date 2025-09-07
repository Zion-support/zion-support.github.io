<<<<<<< HEAD:pages/api/auth-session.ts
import type { NextApiRequest, NextApiResponse } from 'next';

=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth',
;
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/auth-session.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
<<<<<<< HEAD:pages/api/auth-session.ts

  try {
    // TODO: Implement authsession logic
    res.status(200).json({ message: 'authsession endpoint' });
  } catch (error) {
    console.error('Error in authsession:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
  res.status(200).json({ message: 'OK' })
};
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/auth-session.ts
