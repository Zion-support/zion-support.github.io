import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
=======
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {
<<<<<<< HEAD
    const idx = state.connections.findIndex((c) => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
    state.logs.push({
      id: `${now}-${providerId}-disconnect`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "disconnect"
=======
    const idx = state && state.connections.findIndex((c) => c && c.providerId === providerId);
    if (idx >= 0) state && state.connections.splice(idx, 1);
    state && state.logs.push({
      id: `${now}-${providerId}-disconnect`,
      timestamp: now,
      providerId: providerId as any,
      level: "info",
      action: "disconnect",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
  });
  res && res.status(200).json({ ok: true });
}

=======
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now();
  const updated = writeState(state => {
    const idx = state.connections.findIndex(c => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })
  });
  res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
