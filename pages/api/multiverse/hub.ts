import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = { config: {}, lastSyncedAt: new Date().toISOString() };
  
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      instanceId: 'hub-instance',
      config: state.config,
      lastSyncedAt: state.lastSyncedAt
    });
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}