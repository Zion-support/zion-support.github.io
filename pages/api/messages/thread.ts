import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getConversationById,
  getMessages,
  sendMessage,;
} from '../../../utils/messaging/storage';
=======
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  if (req.method === 'GET') {
    const { id } = req.query;
<<<<<<< HEAD
<<<<<<< HEAD
    if (!id || typeof id !== 'string')
      return res.status(400).json({ error: 'Missing id' });
=======
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' })
    }
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,
      senderId: user.id,
      recipientId,
=======
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });
    const conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' })
    }
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,
      senderId: user.id, recipientId,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
<<<<<<< HEAD
<<<<<<< HEAD
      context,
=======
      context
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    });
    res.status(200).json({ conversation, message })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
<<<<<<< HEAD
=======
      context});
    res.status(200).json({ conversation, message })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
