const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const items = listConversations(user.id);
  res.status(200).json({ items })
}
import { NextApiRequest, NextApiResponse } from 'next',
import { require_user } from '../../../utils / auth',
import { list_conversations } from '../../../utils / messaging / storage',
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res),
  // Check condition
if (return, ) {
  $2
}
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const items = list_conversations (user.id),
  res.status (200).json ({ items });
}
;