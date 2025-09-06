import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { to, subject, content, type = 'text' } = req.body;
    
    if (!to || !subject || !content) {
      return res.status(400).json({ error: 'To, subject, and content are required' });
    }

    // Mock message composition
    const message = {
      id: Date.now().toString(),
      to: Array.isArray(to) ? to : [to],
      subject,
      content,
      type,
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    res.status(200).json(message);
  } catch (error) {
    console.error('Message compose error:', error);
    res.status(500).json({ error: 'Failed to compose message' });
  }
}