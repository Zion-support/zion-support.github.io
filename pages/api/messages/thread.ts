
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;

  if (req.method === 'GET') {
    const { id} = req.query;
    if (!id || typeof id !== 'string') return res.status(400).json({_error: 'Missing id'});
    const _conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {_return res.status(404).json({ error: 'Conversation not found'});
    }
    const _messages = getMessages(id);
    res.status(200).json({_conversation, _messages});
  } else if (req.method === 'POST') {_const { conversationId, _recipientId, _body, _linkUrl, _attachmentBase64, _attachmentName, _context} = req.body || {};
    if (!recipientId || !body) return res.status(400).json({_error: 'Missing fields'});
    const {_conversation, _message} = sendMessage({_conversationId, _senderId: user.id, _recipientId, _body, _linkUrl, _attachmentBase64, _attachmentName, _context});
    res.status(200).json({_conversation, _message});
  } else {_res.status(405).json({ error: 'Method not allowed'});
  }
}