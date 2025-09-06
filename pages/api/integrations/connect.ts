
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules },

  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }

  const now = null;
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) })
}

