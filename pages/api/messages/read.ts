import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
<<<<<<< HEAD
import {
  getConversationById,
  markAsRead,;
} from '../../../utils/messaging/storage';
=======
import { getConversationById, markAsRead } from '../../../utils/messaging/storage';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { conversationId } = req.body || {};
  if (!conversationId)
    return res.status(400).json({ error: 'Missing conversationId' });
  const conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id))
    return res.status(404).json({ error: 'Conversation not found' });
  markAsRead(conversationId, user.id);
  res.status(200).json({ success: true });
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { conversationId } = req.body || {};
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' });
  const conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' });
  markAsRead(conversationId, user.id);
  res.status(200).json({ success: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
