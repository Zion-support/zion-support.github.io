import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' });
  }

  try {
    const now = Date.now();
    const updated = writeState((state) => {
      const idx = state.connections.findIndex(c => c.providerId === providerId);
      if (idx >= 0) {
        state.connections.splice(idx, 1);
      }
      state.logs.push({
        id: `${now}-${providerId}-disconnect`,
        timestamp: now,
        providerId: providerId as any,
        level: 'info',
        action: 'disconnect'
      });
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error disconnecting integration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}