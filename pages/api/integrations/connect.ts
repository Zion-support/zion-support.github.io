
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      last_error: null,
    }
    // Check condition
if (state.connections[existing_idx] = connection) {
  $2
}
    else state.connections.push (connection);
    state.logs.push ({
      id: `${now}-${provider_id}-connect`,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======  }
  const now = Date.now();
  const updated = writeState(state => {
    const existingIdx = state.connections.findIndex(c => c.providerId === providerId);
    const connection: ProviderConnection = {
      providerId: providerId as any, status: 'connected',
      accessToken: 'mock_access_token', refreshToken: 'mock_refresh_token',
      expiresAt: now + 1000 * 60 * 60, connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined,
}
