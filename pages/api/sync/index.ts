import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const scopedEvents = [];
    
    const data = {
      status: 'ok',
      instanceId: 'default-instance',
      config: {
        optIn: true,
        paused: false,
        scope: 'all',
        peers: [],
        instanceId: 'default-instance'
      },
      lastSyncedAt: new Date().toISOString(),
      counts: {
        totalEvents: scopedEvents.length
      }
    };

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
}