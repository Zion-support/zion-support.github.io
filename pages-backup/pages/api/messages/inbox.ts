<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  const user = requireUser(req, res)
  if (!user) return
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const items = listConversations(user.id)
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
