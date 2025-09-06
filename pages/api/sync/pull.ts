import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    instanceId: 'sync-instance',
    lastSyncedAt: Date.now(),
    events: [],
    scope: 'global'
  });
}