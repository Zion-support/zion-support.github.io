<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { listConversations } from '../../../utils/messaging/storage',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const user = requireUser(req, res),;
  if (!user) return,;
  if (req.method !== 'GET') return res.status(405).json({ error:'Method not allowed' }),;
  const items = listConversations(user.id),;
  res.status(200).json({ items }),;
}
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../utils/auth',
import { listConversations } from '../../../utils/messaging/storage',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),
  res.status(200).json({ items })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
