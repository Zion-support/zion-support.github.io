import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { since } = req.query;
    const scopedEvents = [];
    const events = scopedEvents.filter((e: any) => (e.timestamp || 0) > (since ? parseInt(since as string) : 0));
    
    const data = {
      instanceId: 'default-instance',
      lastSyncedAt: new Date().toISOString(),
      events,
      scope: 'all'
    };

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
}