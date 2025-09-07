import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser({ error: "Invalid request" });
  if (!user) return
  if (req.method = { error: "Invalid request" };
    if (!id || typeof id !== 'string') return res.status(400).json({ error: "Invalid request" });
    const conversation = getConversationById({ error: "Invalid request" });
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' })
    }
    const messages = getMessages({ error: "Invalid request" });
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {}
    if (!recipientId || !body) return res.status(400).json({ error: "Invalid request" });
    const { conversation, message } = sendMessage({ error: "Invalid request" });
    res.status(200).json({ conversation, message })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
