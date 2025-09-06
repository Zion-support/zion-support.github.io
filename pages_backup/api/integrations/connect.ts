<<<<<<< HEAD:pages_backup/api/integrations/connect.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
import { ProviderConnection, SyncRules } from "../../../lib/integrations/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules },
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }
  const now = null;
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) })
}
origin/cursor/automate-test-improve-and-merge-code-2533
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/connect.ts

  }
  const now = Date && Date.now();
  const updated = writeState((state) => {}
    const existingIdx = state && state.connections.findIndex(
<<<<<<< HEAD:pages_backup/api/integrations/connect.ts
      (c) => c && c.providerId === providerId
import type { NextApiRequest, NextApiResponse } from './next';
import { write_state  } from '../../../lib / integrations / file_store';
import { getProviderById  } from '../../../lib / integrations / registry';
=======
      (c) => c && c.providerId === providerId,

import type { NextApiRequest, NextApiResponse } from './next';'
import { write_state  } from '../../../lib / integrations / file_store';'
import { getProviderById  } from '../../../lib / integrations / registry';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/connect.ts
import { ProviderConnection, SyncRules  } from '../../../lib / integrations / types';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
}
  const { provider_id, sync_rules } = req.body as {}
    provider_id?: string;
    sync_rules?: SyncRules;
  }
  if () {) {}
  $2;
}"
    return res.status (400).json ({ error: "Invalid provider_id" });
  }
  const now = Date.now ();
  const updated = write_state ((state) => {}
    const existing_idx = state.connections.find_index (
      (c) => c.provider_id === provider_id

    );
<<<<<<< HEAD:pages_backup/api/integrations/connect.ts
    const connection: ProviderConnection = {
<<<<<<< HEAD:pages/api/integrations/connect.ts
=======
      provider_id: provider_id as any
      status: "connected"
      access_token: "mock_access_token"
      refresh_token: "mock_refresh_token"
      expires_at: now + 1000 * 60 * 60
      connected_at: now
      sync_rules: sync_rules || {}
      lastSyncAt: undefined
      timestamp: now
      provider_id: provider_id as any
      level: "info"
      action: "connect"
      details: { sync_rules }
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/connect.ts

    });
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = {
    providerId: req.body?.providerId || 'unknown'
    status: 'connected'
    accessToken: 'mock access token'
    refreshToken: 'mock refresh token'
    expiresAt: Date.now() + 1000 * 60 * 60
    connectedAt: Date.now()
    syncRules: req.body?.syncRules || {}
    lastSyncAt: undefined
  };
  res.status(200).json({ connection });
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
import { ProviderConnection, SyncRules } from '../../../lib/integrations/types';
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules },;
  if (!providerId || !getProviderById(providerId)) {;
    return res.status(400).json({ error: 'Invalid providerId' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

=======
    const connection: ProviderConnection = {}
      provider_id: provider_id as any,"
      status: "connected","
      access_token: "mock_access_token","
      refresh_token: "mock_refresh_token",
      expires_at: now + 1000 * 60 * 60,
      connected_at: now,
      sync_rules: sync_rules || {},
      lastSyncAt: undefined,

      timestamp: now,
      provider_id: provider_id as any,"
      level: "info","
      action: "connect",
      details: { sync_rules },
    });
  });
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/connect.ts
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules };
  if (!providerId || !getProviderById(providerId)) {'
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now();
  const updated = writeState(state => {}
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId);
<<<<<<< HEAD:pages_backup/api/integrations/connect.ts
    const connection: ProviderConnection = {
      providerId: providerId as any, status: 'connected'
      accessToken: 'mock_access_token', refreshToken: 'mock_refresh_token'
      expiresAt: now + 1000 * 60 * 60, connectedAt: now
      syncRules: syncRules || {}
      lastSyncAt: undefined
=======
    const connection: ProviderConnection = {'
      providerId: providerId as any, status: 'connected','
      accessToken: 'mock_access_token', refreshToken: 'mock_refresh_token',
      expiresAt: now + 1000 * 60 * 60, connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/connect.ts
      lastError: null};
    if (existingIdx >= 0) state.connections[existingIdx] = connection; else state.connections.push(connection);'
    state.logs.push({ id: `${now}-${providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: { syncRules } })
  });
<<<<<<< HEAD:pages_backup/api/integrations/connect.ts

<<<<<<< HEAD:pages/api/integrations/connect.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/connect.ts
=======


  res.status (200).json ({}
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}






'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/connect.ts
