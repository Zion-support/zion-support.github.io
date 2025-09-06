import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { action, fraudId } = req.body;
    
    if (!action || !fraudId) {
      return res.status(400).json({ error: 'Action and fraud ID are required' });
    }

    // Mock fraud action processing
    const result = {
      fraudId,
      action,
      status: 'processed',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Fraud action error:', error);
    res.status(500).json({ error: 'Failed to process fraud action' });
  }
}