import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }
  const now = Date.now();
  const updated = writeState(state => {
    const idx = state.connections.findIndex(c => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
<<<<<<< HEAD
    state.logs.push({
      id: `${now}-${providerId}-disconnect`,
      timestamp: now,
      providerId: providerId as any,
      level: 'info',
      action: 'disconnect',
    });
  });
  res.status(200).json({ ok: true });
=======
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })
  });
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
