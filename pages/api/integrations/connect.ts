<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';


  if (req.method !== "POST")

    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "connect",
      details: { sync_rules },
    });
  });

}

=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });

  }
  const now = Date.now();
  const updated = writeState(state => {
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId);
    const connection: ProviderConnection = {
      providerId: providerId as any, status: 'connected',
      accessToken: 'mock_access_token', refreshToken: 'mock_refresh_token',
      expiresAt: now + 1000 * 60 * 60, connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined,
lastError: null};
    if (existingIdx >= 0) state.connections[existingIdx] = connection; else state.connections.push(connection);
    state.logs.push({ id: `${now}-${providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: { syncRules } })
  });
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) })

}
res.status (200).json ({
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
