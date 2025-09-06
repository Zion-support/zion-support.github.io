import { NextApiRequest, NextApiResponse } from 'next';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { conversationId, content, senderId } = req.body;
    
    if (!conversationId || !content || !senderId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Rate limiting
    await rateLimit(req, res);

    const now = new Date().toISOString();
    const msg: Message = {
      id: Date.now().toString(),
      conversationId,
      content,
      senderId,
      timestamp: now,
      read: false
    };

    // In a real implementation, save to database
    console.log('Message created:', msg);

    res.status(201).json({ message: msg });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to send message' });
  }
}