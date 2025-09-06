<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import {
  getConversationById,
  markAsRead,
} from '../../../utils/messaging/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
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
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
