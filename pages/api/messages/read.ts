import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, markAsRead } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser($2);
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { conversationId } = req.body || {},
  if (!conversationId) return res.status(400).json($2);
  const conv = getConversationById($2);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json($2);
  markAsRead($2);
  res.status(200).json({ success: true})
}