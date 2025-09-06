<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST")
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
import { ProviderConnection, SyncRules } from "../../../lib/integrations/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST");
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;
<<<<<<< HEAD
  }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req && req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {
    const existingIdx = state.connections.findIndex(
      (c) => c.providerId === providerId
    );
    const connection: ProviderConnection = {
      providerId: providerId as any
      status: "connected"
      accessToken: "mock_access_token"
      refreshToken: "mock_refresh_token"
      expiresAt: now + 1000 * 60 * 60
      connectedAt: now
      syncRules: syncRules |{}
      lastSyncAt: undefined
      lastError: null
    }
    if (existingIdx >= 0) state.connections[existingIdx] = connection;
    else state.connections.push(connection);
    state.logs.push({
      id: `${now}-${providerId}-connect`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "connect"
      details: { syncRules }
    });
  });
  res.status(200).json({
    ok: true
    connection: updated.connections.find((c) => c.providerId === providerId)
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
      lastError: null,
    };
    if (existingIdx >= 0) state && state.connections[existingIdx] = connection;
    else state && state.connections.push(connection);
    state && state.logs.push({
      id: `${now}-${providerId}-connect`,
      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "connect",
      details: { sync_rules },
    });
  });
<<<<<<< HEAD
  res && res.status(200).json({
    ok: true,
    connection: updated && updated.connections.find((c) => c && c.providerId === providerId),
=======

}
<<<<<<< HEAD

=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  });
}
<<<<<<< HEAD
  res.status (200).json ({
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
