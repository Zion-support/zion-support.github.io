import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  const items = listConversations(user.id);
  res.status(200).json({ items });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const items = listConversations(user.id);
  res.status(200).json({ items })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
