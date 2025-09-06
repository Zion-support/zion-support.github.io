

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const {
    recipient_id,

    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,

  } = req.body as {
    recipient_id: string;

    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;

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

  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({

    senderId: user.id, recipientId,

=======
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    body,
    link_url,
    attachmentBase64,


    context,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });

}

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext
  };
  if (!recipientId || !body) return res.status(400).json({ error: 'Missing required fields' });
  const { conversation, message } = sendMessage({
    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context
  });
  res.status(200).json({ conversation, message })
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
