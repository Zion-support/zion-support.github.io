
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_conversationId} = req.body || {};
  if (!conversationId) return res.status(400).json({_error: 'Missing conversationId'});
  const _conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({_error: 'Conversation not found'});
  markAsRead(conversationId, user.id);
  res.status(200).json({_success: true});
}