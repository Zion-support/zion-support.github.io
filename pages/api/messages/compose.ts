
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_recipientId, _body, _linkUrl, _attachmentBase64, _attachmentName, _context} = req.body as {_recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;};

  if (!recipientId || !body) return res.status(400).json({_error: 'Missing fields'});

  const {_conversation, _message} = sendMessage({_senderId: user.id, _recipientId, _body, _linkUrl, _attachmentBase64, _attachmentName, _context});

  res.status(200).json({_conversation, _message});
}