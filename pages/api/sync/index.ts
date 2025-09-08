import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = { config: { instanceId: 'sync-instance' }, lastSyncedAt: new Date().toISOString() };
  const scopedEvents: any[] = [];
  
  res.status(200).json({
    status: 'ok',
    instanceId: state.config.instanceId,
    config: state.config,
    lastSyncedAt: state.lastSyncedAt,
    counts: {
      totalEvents: scopedEvents.length
    }
  });
}