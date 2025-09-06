import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock inbox messages
    const messages = [
      {
        id: '1',
        from: 'system@zion.os',
        subject: 'Welcome to Zion OS',
        preview: 'Thank you for joining our platform...',
        timestamp: new Date().toISOString(),
        read: false
      },
      {
        id: '2',
        from: 'support@zion.os',
        subject: 'Your account is ready',
        preview: 'Your account has been successfully set up...',
        timestamp: new Date().toISOString(),
        read: true
      }
    ];

    res.status(200).json(messages);
  } catch (error) {
    console.error('Inbox error:', error);
    res.status(500).json({ error: 'Failed to get inbox messages' });
  }
}