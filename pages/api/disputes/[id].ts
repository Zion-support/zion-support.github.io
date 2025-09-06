import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    // Mock dispute data
    const dispute = {
      id,
      status: 'active',
      description: 'Sample dispute',
      createdAt: new Date().toISOString()
    };

    res.status(200).json(dispute);
  } catch (error) {
    console.error('Dispute get error:', error);
    res.status(500).json({ error: 'Failed to get dispute' });
  }
}