import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId, limit = '50' } = req.query;
    
    // Mock integration logs
    const logs = [
      {
        id: '1',
        providerId: providerId || 'default',
        level: 'info',
        message: 'Integration connected successfully',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        providerId: providerId || 'default',
        level: 'warn',
        message: 'Rate limit approaching',
        timestamp: new Date().toISOString()
      }
    ];

    res.status(200).json({
      logs: logs.slice(0, parseInt(limit as string)),
      total: logs.length
    });
  } catch (error) {
    console.error('Integration logs error:', error);
    res.status(500).json({ error: 'Failed to get integration logs' });
  }
}