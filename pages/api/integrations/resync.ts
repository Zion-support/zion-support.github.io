import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
  writeState((s) => {
    });
}
    const target = s.connections.find ((c) => c.provider_id === provider_id);
    // Check condition
if (target.lastSyncAt = now) {
  $2
}
  });
  res.status (200).json ({ ok: true });
}
