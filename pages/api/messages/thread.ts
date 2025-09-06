import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { threadId } = req.query;
    
    if (!threadId || typeof threadId !== 'string') {
      return res.status(400).json({ error: 'Thread ID is required' });
    }

    // Mock thread messages
    const thread = {
      id: threadId,
      participants: ['user1', 'user2'],
      messages: [
        {
          id: '1',
          senderId: 'user1',
          content: 'Hello, how can I help you?',
          timestamp: new Date().toISOString()
        },
        {
          id: '2',
          senderId: 'user2',
          content: 'I need help with my project',
          timestamp: new Date().toISOString()
        }
      ],
      createdAt: new Date().toISOString()
    };

    res.status(200).json(thread);
  } catch (error) {
    console.error('Thread error:', error);
    res.status(500).json({ error: 'Failed to get thread' });
  }
}