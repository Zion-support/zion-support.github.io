import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const config = {
        optIn: true,
        paused: false,
        scope: 'all',
        peers: [],
        instanceId: 'default-instance'
      };

      res.status(200).json({ config });
    } catch (error: any) {
      res.status(500).json({ error: error?.message || 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { optIn, paused, scope, peers, instanceId } = req.body;
      
      const updatedConfig = {
        optIn: optIn ?? true,
        paused: paused ?? false,
        scope: scope ?? 'all',
        peers: peers ?? [],
        instanceId: instanceId ?? 'default-instance'
      };

      res.status(200).json({ config: updatedConfig });
    } catch (error: any) {
      res.status(500).json({ error: error?.message || 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}