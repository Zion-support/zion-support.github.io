import type { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  participants: string[];
  messages: Message[];
  updatedAtIso: string;
}

const conversations: Conversation[] = [];

function writeJsonFile<T>(filename: string, data: T) {
  // Mock file write
  console.log(`Writing to ${filename}:`, data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    if (req.method === 'GET') {
      // List conversations
      res.status(200).json(conversations);
    } else if (req.method === 'POST') {
      // Send message
      const { conversationId, senderId, content } = req.body;
      
      if (!conversationId || !senderId || !content) {
        return res.status(400).json({ error: 'Conversation ID, sender ID, and content are required' });
      }

      const conversation = conversations.find(c => c.id === conversationId);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }

      const msg: Message = {
        id: Date.now().toString(),
        senderId,
        content,
        timestamp: new Date().toISOString()
      };

      conversation.messages.push(msg);
      conversation.updatedAtIso = new Date().toISOString();
      writeJsonFile<Conversation[]>('conversations.json', conversations);

      res.status(200).json({
        message: msg,
        conversation
      });
    }
  } catch (error) {
    console.error('Messages error:', error);
    res.status(500).json({ error: 'Failed to process messages' });
  }
}