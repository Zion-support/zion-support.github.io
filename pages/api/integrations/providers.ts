import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for providers list logic
    const providers = [
      { id: 'github', name: 'GitHub', status: 'available' },
      { id: 'slack', name: 'Slack', status: 'available' },
      { id: 'discord', name: 'Discord', status: 'available' }
    ];

    res.status(200).json({ success: true, providers });
  } catch (error) {
    console.error('Providers error:', error);
    res.status(500).json({ error: 'Failed to fetch providers' });
  }
}