import { NextApiRequest, NextApiResponse } from 'next';
import {
  getConversationById,
  getMessages,
  sendMessage,
} from '../../../utils/messaging/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  try {
    const { conversationId } = req.query;
    
    if (!conversationId || Array.isArray(conversationId)) {
      return res.status(400).json({ error: 'Invalid conversation ID' });
    }

    if (req.method === 'GET') {
      const conversation = getConversationById(conversationId);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }
      
      const messages = getMessages(conversationId);
      return res.status(200).json({ conversation, messages });
    }
    
    if (req.method === 'POST') {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Message content is required' });
      }
      
      const message = sendMessage(conversationId, user.id, content);
      return res.status(201).json({ message });
    }
    
    res.setHeader('Allow', 'GET, POST');
    res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Server error' });
  }
}