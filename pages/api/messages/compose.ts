import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const {
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context,
  } = req.body as {
    recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;
  };

  if (!recipientId || !body)
    return res.status(400).json({ error: 'Missing fields' });

  const { conversation, message } = sendMessage({
    senderId: user.id,
    recipientId,
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string, body: string,
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext
  };

  if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });

  const { conversation, message } = sendMessage({
    senderId: user.id, recipientId,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
<<<<<<< HEAD
    context,
  });

  res.status(200).json({ conversation, message });
=======
    context});

  res.status(200).json({ conversation, message })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
