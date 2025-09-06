import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
import { ProviderConnection, SyncRules } from '../../../lib/integrations/types';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({,
    error: 'Invalid providerId' })
  }
  const now = Date.now();
  const updated = writeState(state => {
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId);
    const,
    connection: ProviderConnection = {,
    providerId: providerId as any;,
    status: 'connected',
      a,
    ccessToken: 'mock_access_token',
      r,
    efreshToken: 'mock_refresh_token',
      e,
    xpiresAt: now + 1000 * 60 * 60,
      c,
    onnectedAt: now,
      s,
    yncRules: syncRules || {},
      l,
    astSyncAt: undefined,
      l,
    astError: null},
    if (existingIdx >= 0) state.connections[existingIdx] = connection, else state.connections.push(connection);
    state.logs.push({,
    id: `${now}-${providerId}-connect`, t,
    imestamp: now, p,
    roviderId: providerId as any, l,
    evel: 'info', a,
    ction: 'connect', d,
    etails: { syncRules } })
  });
  res.status(200).json({,
    ok: true, c,
    onnection: updated.connections.find(c => c.providerId === providerId) })
}