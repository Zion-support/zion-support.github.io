import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { content, conversationId } = req.body || {};
    
    if (req.method === 'POST') {
      const msg = {
        id: Date.now().toString(),
        content: content || '',
        createdAtIso: new Date().toISOString()
      };
      
      res.status(200).json({ message: 'Message sent', msg });
    } else {
      res.status(200).json({ message: 'Messages endpoint' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}