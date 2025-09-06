<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
  writeState((s) => {
    s.logs.push({
      id: `${now}-${providerId}-resync`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "resync"
<<<<<<< HEAD
      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "resync",
    });
    const target = s && s.connections.find((c) => c && c.providerId === providerId);
    if (target) target && target.lastSyncAt = now;
=======
    });
    const target = s.connections.find((c) => c.providerId === providerId);
    if (target) target.lastSyncAt = now;
  });
  res.status(200).json({ ok: true });
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const state = readState();
  const conn = state.connections.find(c => c.providerId === providerId);
  if (!conn) return res.status(400).json({ error: 'Provider not connected' });

  const now = Date.now();
  writeState(s => {
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  });
  res && res.status(200).json({ ok: true });
}
    const target = s.connections.find ((c) => c.provider_id === provider_id);
    // Check condition
if (target.lastSyncAt = now) {
  $2
}
<<<<<<< HEAD
  });
  res.status (200).json ({ ok: true });
}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
