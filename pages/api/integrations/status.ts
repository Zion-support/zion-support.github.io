import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId } = req.query;
    
    // Mock integration status
    const status = {
      providerId: providerId || 'all',
      connected: true,
      lastSync: new Date().toISOString(),
      syncStatus: 'success',
      errorCount: 0,
      uptime: '99.9%'
    };

    res.status(200).json(status);
  } catch (error) {
    console.error('Integration status error:', error);
    res.status(500).json({ error: 'Failed to get integration status' });
  }
}