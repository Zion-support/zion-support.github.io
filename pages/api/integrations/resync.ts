import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' });
  }

  try {
    const state = readState();
    const conn = state.connections.find(c => c.providerId === providerId);
    if (!conn) {
      return res.status(400).json({ error: 'Connection not found' });
    }

    const now = Date.now();
    writeState((s) => {
      const target = s.connections.find(c => c.providerId === providerId);
      if (target) {
        target.lastSync = now;
      }
      s.logs.push({
        id: `${now}-${providerId}-resync`,
        timestamp: now,
        providerId: providerId as any,
        level: 'info',
        action: 'resync'
      });
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error resyncing integration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}