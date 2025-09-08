import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = { config: {}, lastSyncedAt: new Date().toISOString() };
  
  if (req.method === 'POST') {
    const { optIn, paused, scope, peers, instanceId } = req.body || {};
    
    return res.status(200).json({
      config: state.config
    });
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}