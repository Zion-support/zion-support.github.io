import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser({ error: "Invalid request" });
  if (!user) return
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string
    body: string
    linkUrl?: string
    attachmentBase64?: string
    attachmentName?: string
    context?: ConversationContext
  }
  if (!recipientId || !body) return res.status(400).json({ error: "Invalid request" });
  const { conversation, message } = sendMessage({ error: "Invalid request" });
  res.status(200).json({ conversation, message })
}
