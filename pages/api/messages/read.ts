<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { getConversationById, markAsRead } from '[^']*';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533


  res.status(200).json({ success: true })
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { getConversationById, markAsRead } from '../../../utils/messaging/storage',
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next',;'
import { requireUser } from '../../../utils/auth',;'
import { getConversationById, markAsRead } from '../../../utils/messaging/storage',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const user = requireUser(req, res),
  if (!user) return,'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { conversationId } = req.body || {},'
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' }),
  const conv = getConversationById(conversationId),'
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' }),
  markAsRead(conversationId, user.id),
<<<<<<< HEAD
=======
>>>>>>> pr-12243
import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { requireUser } from '../../../utils/auth';
import { getConversationById, markAsRead } from '../../../utils/messaging/storage';
export default function handler(req, res) {
  try {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { conversationId } = req.body || {};
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' });
  const conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' });
  markAsRead(conversationId, user.id);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
import { requireUser } from '../../../utils/auth',;
import { getConversationById, markAsRead } from '../../../utils/messaging/storage'
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res)
  if (!user) return
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { conversationId } = req.body || {}
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' })
  const conv = getConversationById(conversationId)
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' })
  markAsRead(conversationId, user.id)
<<<<<<< HEAD
=======
>>>>>>> main
=======
  const user = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
  res.status(200).json({ success: true })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  res.status(200).json({ success: true });
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
