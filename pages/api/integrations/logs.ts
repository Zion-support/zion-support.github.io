import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId, limit = '50', offset = '0' } = req.query;

    // Mock integration logs
    const logs = [
      {
        id: '1',
        providerId: providerId || 'all',
        level: 'info',
        message: 'Integration sync completed successfully',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        providerId: providerId || 'all',
        level: 'warning',
        message: 'Rate limit approaching',
        timestamp: new Date().toISOString()
      }
    ];

    res.status(200).json({
      success: true,
      logs,
      total: logs.length,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string)
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve integration logs'
    });
  }
}