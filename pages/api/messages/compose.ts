<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { sendMessage } from '[^']*';
import { ConversationContext } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const {
<<<<<<< HEAD
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
  } = req.body as {
=======
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context,
  } = req && req.body as {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;
<<<<<<< HEAD
  }
  if (!recipientId |!body)
    return res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
    senderId: user.id
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
=======
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
<<<<<<< HEAD
    senderId: user && user.id,
    recipientId,
=======
    senderId: user.id, recipientId,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
<<<<<<< HEAD
    context,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
  res && res.status(200).json({ conversation, message });
}

=======
    context});

  res.status(200).json({ conversation, message })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
