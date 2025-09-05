<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../utils/auth',
import { getConversationById, markAsRead } from '../../../utils/messaging/storage',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { conversationId } = req.body || {},
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' }),
  const conv = getConversationById(conversationId),
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' }),
  markAsRead(conversationId, user.id),
  res.status(200).json({ success: true })
=======

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_conversationId} = req.body || {};
  if (!conversationId) return res.status(400).json({_error: 'Missing conversationId'});
  const _conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({_error: 'Conversation not found'});
  markAsRead(conversationId, user.id);
  res.status(200).json({_success: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}