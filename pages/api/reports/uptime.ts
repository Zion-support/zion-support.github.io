import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock uptime report - replace with actual uptime monitoring
    const uptimeReport = {
      status: 'up',
      uptime: 99.9,
      lastChecked: new Date().toISOString(),
      incidents: [],
      averageResponseTime: 150
    };
    
    res.status(200).json(uptimeReport);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' });
  }
}