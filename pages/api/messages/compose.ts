import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
context,
  });
  res.status(200).json({ conversation, message });

}
