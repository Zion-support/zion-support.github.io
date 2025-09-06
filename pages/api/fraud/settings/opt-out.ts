import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, optOut } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock opt-out processing
    const result = {
      userId,
      optOut: optOut || false,
      updatedAt: new Date().toISOString()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Opt-out error:', error);
    res.status(500).json({ error: 'Failed to process opt-out' });
  }
}