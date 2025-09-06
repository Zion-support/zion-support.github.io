import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok",
    instanceId: "sync-instance",
    config: {},
    lastSyncedAt: Date.now(),
    counts: {
      totalEvents: 0
    }
  });
}