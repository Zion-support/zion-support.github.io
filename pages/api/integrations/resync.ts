import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId, force = false } = req.body;
    
    if (!providerId) {
      return res.status(400).json({ error: 'Provider ID is required' });
    }

    // Mock resync process
    const result = {
      providerId,
      status: 'resync_started',
      force,
      startedAt: new Date().toISOString(),
      estimatedDuration: '5-10 minutes'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Integration resync error:', error);
    res.status(500).json({ error: 'Failed to start resync' });
  }
}