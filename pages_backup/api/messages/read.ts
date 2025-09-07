
import { NextApiRequest, NextApiResponse } from '[^]*;
import { requireUser } from '[^']*;
import { getConversationById, markAsRead } from [^']*';
origin/cursor/automate-test-improve-and-merge-code-2533


  res.status(200).json({ success: true })

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/messages/read.ts
import { NextApiRequest, NextApiResponse } from next,
import { requireUser } from '../../../utils/auth',
import { getConversationById, markAsRead } from ../../../utils/messaging/storage,
export default function handler(req: NextApiRequest, res: NextApiResponse) {

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from ../../../utils/auth,
import { getConversationById, markAsRead } from '../../../utils/messaging/storage'
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res)
  if (!user) return
  if (req.method !== POST) return res.status(405).json({ error: 'Method not allowed' })
  const { conversationId } = req.body || {}
  if (!conversationId) return res.status(400).json({ error: Missing conversationId })
  const conv = getConversationById(conversationId)
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' })
  markAsRead(conversationId, user.id)
main
  const user = null;

=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  res.status(200).json({ success: true })
}

