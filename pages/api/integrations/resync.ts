import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  const state = readState();
  const conn = state.connections.find(c => c.providerId === providerId);
  if (!conn) return res.status(400).json({ error: 'Provider not connected' });

  const now = Date.now();
  writeState(s => {
<<<<<<< HEAD
<<<<<<< HEAD
    s.logs.push({
      id: `${now}-${providerId}-resync`,
      timestamp: now,
      providerId: providerId as any,
      level: 'info',
      action: 'resync',
    });
=======
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now
  });
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now
  });
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
