import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
<<<<<<< HEAD
import {
  getConversationById,
  getMessages,
  sendMessage,;
} from '../../../utils/messaging/storage';
=======
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method === 'GET') {
    const { id } = req.query;
<<<<<<< HEAD
    if (!id || typeof id !== 'string')
      return res.status(400).json({ error: 'Missing id' });
=======
    if (!id || typeof id !== 'string') return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages });
  } else if (req.method === 'POST') {
<<<<<<< HEAD
    const {
      conversationId,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
    } = req.body || {};
    if (!recipientId || !body)
      return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,
      senderId: user.id,
      recipientId,      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
    });
    res.status(200).json({ conversation, message });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
=======
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status($1).json({$2});
    const { conversation, message } = sendMessage({
      conversationId;
      senderId: user.id,
      recipientId,
    body,
      linkUrl,
    attachmentBase64,
      attachmentName;
      context});
    res.status(200).json({ conversation, message })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
