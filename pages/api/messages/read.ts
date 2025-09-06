import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, markAsRead } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { conversationId } = req.body || {};
  if (!conversationId) return res.status($1).json({$2});
  const conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status($1).json({$2});
  markAsRead(conversationId, user.id);
  res.status(200).json({ success: true })
}