<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { writeState } from '../../../lib/integrations/fileStore',
import { getProviderById } from '../../../lib/integrations/registry',
import { ProviderConnection, SyncRules } from '../../../lib/integrations/types',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules },
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now(),
  const updated = writeState(state => {
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_providerId, _syncRules} = req.body as {_providerId?: string; syncRules?: SyncRules};
  if (!providerId || !getProviderById(providerId)) {_return res.status(400).json({ error: 'Invalid providerId'});
  }
  const _now = Date.now();
  const _updated = writeState(state => {_const _existingIdx = state.connections.findIndex(c => c.providerId === providerId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    const connection: ProviderConnection = {
      providerId: providerId as any, _status: 'connected', _accessToken: 'mock_access_token', _refreshToken: 'mock_refresh_token', _expiresAt: now + 1000 * 60 * 60, _connectedAt: now, _syncRules: syncRules || {},
      lastSyncAt: undefined,
<<<<<<< HEAD
      lastError: null},
    if (existingIdx >= 0) state.connections[existingIdx] = connection, else state.connections.push(connection),
    state.logs.push({ id: `${now}-${providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: { syncRules } })
  }),
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) })
=======
      lastError: null};
    if (existingIdx >= 0) state.connections[existingIdx] = connection; else state.connections.push(connection);
    state.logs.push({_id: `${now}-${_providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: {_syncRules} });
  });
  res.status(200).json({_ok: true, _connection: updated.connections.find(c => c.providerId === providerId)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}