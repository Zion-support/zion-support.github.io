:pages/api/integrations/resync.ts



ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {
:pages/api/integrations/resync.ts


  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });


ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
  writeState((s) => {;

    s && s.logs.push({;
      id: `${now}-${providerId}-resync`;
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../lib / integrations / file_store';
import { getProviderById  } from '../../../lib / integrations / registry';
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (;
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}

    });

}
:pages/api/integrations/resync.ts



;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
;
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {;
    return res.status(400).json({ error: 'Invalid providerId' });
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {;
    return res.status(400).json({ error: "Invalid providerId" });
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
  }
  const state = readState();
  const conn = state.connections.find(c => c.providerId === providerId);
  if (!conn) return res.status(400).json({ error: 'Provider not connected' });
;
  const now = Date.now();
  writeState(s => {;
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now
  });
:pages/api/integrations/resync.ts

  res.status(200).json({ ok: true })


ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
}
;
    const target = s.connections.find ((c) => c.provider_id === provider_id);
    // Check condition;
if (target.lastSyncAt = now) {
  $2
}
:pages/api/integrations/resync.ts

  });
  res.status (200).json ({ ok: true });
}



  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
