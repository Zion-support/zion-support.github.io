import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = '24h' } = req.query;
    
    // Mock uptime report
    const report = {
      period,
      timestamp: new Date().toISOString(),
      uptime: {
        percentage: 99.9,
        totalTime: 86400, // 24 hours in seconds
        downtime: 86.4, // 1.44 minutes
        incidents: 2
      },
      incidents: [
        {
          id: 'incident-1',
          startTime: '2024-01-20T02:00:00Z',
          endTime: '2024-01-20T02:30:00Z',
          duration: 1800, // 30 minutes
          status: 'resolved',
          description: 'Database connection timeout'
        },
        {
          id: 'incident-2',
          startTime: '2024-01-20T14:15:00Z',
          endTime: '2024-01-20T14:20:00Z',
          duration: 300, // 5 minutes
          status: 'resolved',
          description: 'CDN configuration issue'
        }
      ],
      metrics: {
        averageResponseTime: 120,
        maxResponseTime: 5000,
        minResponseTime: 50,
        requestsPerSecond: 150
      }
    };

    res.status(200).json({
      success: true,
      report
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve uptime report' });
  }
}