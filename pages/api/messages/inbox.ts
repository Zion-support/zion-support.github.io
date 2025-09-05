<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../utils/auth',
import { listConversations } from '../../../utils/messaging/storage',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),
  res.status(200).json({ items })
=======

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const _items = listConversations(user.id);
  res.status(200).json({_items});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}