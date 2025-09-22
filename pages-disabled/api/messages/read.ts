res.status(200).json({ success: true })
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { getConversationById, markAsRead } from '../../../utils/messaging/storage',
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
const user = requireUser(req, res),
  if (!user) return,'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { conversationId } = req.body || {},'
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' }),
  const conv = getConversationById(conversationId),'
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' }),
  markAsRead(conversationId, user.id),

import { NextApiRequest, NextApiResponse } from 'next';
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
  res.status(200).json({ success: true })
};
  res.status(200).json({ success: true });
};'
