<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../utils/auth',
import { sendMessage } from '../../../utils/messaging/storage',
import { ConversationContext } from '../../../utils/messaging/types',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext
  },

  if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' }),

  const { conversation, message } = sendMessage({
    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context}),

  res.status(200).json({ conversation, message })
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}