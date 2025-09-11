
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

<<<<<<< HEAD
<<<<<<< HEAD
if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req && req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,
=======
    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import { write_state  } from '../../../lib / integrations / file_store';
import { getProviderById  } from '../../../lib / integrations / registry';
import { ProviderConnection, SyncRules  } from '../../../lib / integrations / types';
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { provider_id, sync_rules } = req.body as {
    provider_id?: string;
    sync_rules?: SyncRules;
  }
  if () {) {
  $2
}
    return res.status (400).json ({ error: "Invalid provider_id" });
  }
  const now = Date.now ();
  const updated = write_state ((state) => {
    const existing_idx = state.connections.find_index (
      (c) => c.provider_id === provider_id,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    const connection: ProviderConnection = {
      provider_id: provider_id as any,
      status: "connected",
      access_token: "mock_access_token",
      refresh_token: "mock_refresh_token",
      expires_at: now + 1000 * 60 * 60,
      connected_at: now,
      sync_rules: sync_rules || {},
      lastSyncAt: undefined,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      last_error: null,
    }
    // Check condition
if (state.connections[existing_idx] = connection) {
  $2
}
    else state.connections.push (connection);
    state.logs.push ({
      id: `${now}-${provider_id}-connect`,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "connect",
      details: { sync_rules },
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId, syncRules } = req.body as { providerId?: string, syncRules?: SyncRules };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST")
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
import { ProviderConnection, SyncRules } from "../../../lib/integrations/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
lastError: null};
=======
      lastError: null};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (existingIdx >= 0) state.connections[existingIdx] = connection; else state.connections.push(connection);
    state.logs.push({ id: `${now}-${providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: { syncRules } })
  });
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) })

}
<<<<<<< HEAD
  res.status (200).json ({
res.status (200).json ({
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}
<<<<<<< HEAD



import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = {
    providerId: req.body?.providerId || 'unknown',
    status: 'connected',
    accessToken: 'mock access token',
    refreshToken: 'mock refresh token',
    expiresAt: Date.now() + 1000 * 60 * 60,
    connectedAt: Date.now(),
    syncRules: req.body?.syncRules || {},
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
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  const now = Date.now();
  const updated = writeState(state => {;
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId);
    const connection: ProviderConnection = {;
      providerId: providerId as any;
      status: 'connected';
      accessToken: 'mock_access_token';
      refreshToken: 'mock_refresh_token';
      expiresAt: now + 1000 * 60 * 60,;
      connectedAt: now,;
      syncRules: syncRules || {},;
      lastSyncAt: undefined,;
      lastError: null},;
    if (existingIdx >= 0) state.connections[existingIdx] = connection, else state.connections.push(connection);
    state.logs.push({ id: `${now}-${providerId}-connect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'connect', details: { syncRules } });
  });
  res.status(200).json({ ok: true, connection: updated.connections.find(c => c.providerId === providerId) });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
