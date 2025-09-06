import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId } = req.body;
    
    if (!providerId) {
      return res.status(400).json({ error: 'Provider ID is required' });
    }

    // Mock disconnection
    const result = {
      providerId,
      status: 'disconnected',
      disconnectedAt: new Date().toISOString()
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Integration disconnect error:', error);
    res.status(500).json({ error: 'Failed to disconnect integration' });
  }
}