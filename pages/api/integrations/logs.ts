import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { integrationId, limit = '50' } = req.query;
    
    // Mock integration logs
    const logs = [
      {
        id: 'log-1',
        integrationId: integrationId || 'integration-1',
        level: 'info',
        message: 'Integration sync completed successfully',
        timestamp: new Date().toISOString()
      },
      {
        id: 'log-2',
        integrationId: integrationId || 'integration-1',
        level: 'warning',
        message: 'Rate limit approaching',
        timestamp: new Date().toISOString()
      }
    ];

    const limitNum = parseInt(limit as string, 10);
    const limitedLogs = logs.slice(0, limitNum);

    res.status(200).json({
      success: true,
      logs: limitedLogs,
      total: logs.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve integration logs' });
  }
}