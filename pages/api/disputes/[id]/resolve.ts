import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { resolution } = req.body;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    if (!resolution) {
      return res.status(400).json({ error: 'Resolution is required' });
    }

    // Mock dispute resolution
    res.status(200).json({ 
      success: true, 
      disputeId: id, 
      status: 'resolved',
      resolution 
    });
  } catch (error) {
    console.error('Dispute resolve error:', error);
    res.status(500).json({ error: 'Failed to resolve dispute' });
  }
}