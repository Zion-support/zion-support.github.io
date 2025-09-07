<<<<<<< HEAD:pages/api/messages/inbox.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement inbox logic
    res.status(200).json({ message: 'inbox endpoint' });
  } catch (error) {
    console.error('Error in inbox:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;

import { listConversations } from '../../../utils/messaging/storage',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const user = requireUser(req, res),
  if (!user) return,'
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),

import { NextApiRequest, NextApiResponse } from 'next';

  res.status(200).json({ items })
};
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/messages/inbox.ts
