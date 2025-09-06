import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { page = '1', limit = '10' } = req.query;
    
    // Mock fraud list
    const frauds = [
      { id: '1', type: 'suspicious', severity: 'high', timestamp: new Date().toISOString() },
      { id: '2', type: 'dangerous', severity: 'critical', timestamp: new Date().toISOString() }
    ];

    res.status(200).json({
      frauds,
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        total: frauds.length
      }
    });
  } catch (error) {
    console.error('Fraud list error:', error);
    res.status(500).json({ error: 'Failed to get fraud list' });
  }
}