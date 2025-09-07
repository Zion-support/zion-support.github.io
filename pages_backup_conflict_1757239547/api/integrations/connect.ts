import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }
  const now = Date.now();
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
  });
}
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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