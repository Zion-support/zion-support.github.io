<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
<<<<<<< HEAD:pages/api/integrations/resync.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts

import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../lib/integrations/fileStore";"
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(;
  req: NextApiRequest;
<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
  res: NextApiResponse
) {
=======
  res: NextApiResponse;
) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);"
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
<<<<<<< HEAD:pages/api/integrations/resync.ts
  writeState((s) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  writeState((s) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts

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
=======
  writeState((s) => {}
    s && s.logs.push({}
      id: `${now}-${providerId}-resync`,
import type { NextApiRequest, NextApiResponse } from './next';'
import { read_state, write_state  } from '../../../lib / integrations / file_store';'
import { getProviderById  } from '../../../lib / integrations / registry';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ("
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts
}

    });

}
<<<<<<< HEAD:pages/api/integrations/resync.ts

<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
<<<<<<< HEAD
=======
=======
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
<<<<<<< HEAD:pages/api/integrations/resync.ts
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  if (!providerId || !getProviderById(providerId)) {;
    return res.status(400).json({ error: 'Invalid providerId' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {;
    return res.status(400).json({ error: "Invalid providerId" });
<<<<<<< HEAD:pages/api/integrations/resync.ts
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
=======
'
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });
'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readState, writeState } from '../../../lib/integrations/fileStore';'
import { getProviderById } from '../../../lib/integrations/registry';
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {'
    return res.status(400).json({ error: 'Invalid providerId' })

"
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../lib/integrations/fileStore";"
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler() { return null; }
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {"
    return res.status(400).json({ error: "Invalid providerId" });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts
  }
  const state = readState();
  const conn = state.connections.find(c => c.providerId === providerId);'
  if (!conn) return res.status(400).json({ error: 'Provider not connected' });
;
  const now = Date.now();
<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
  writeState(s => {;
=======
  writeState(s => {'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now;
  });
<<<<<<< HEAD:pages/api-disabled/api/integrations/resync.ts
}
<<<<<<< HEAD:pages/api/integrations/resync.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  });
  res.status (200).json ({ ok: true });
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
=======
;
    const target = s.connections.find ((c) => c.provider_id === provider_id);
    // Check condition;
if (target.lastSyncAt = now) {
  $2
}
  } catch (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages/api/integrations/resync.ts
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/resync.ts
=======


}

    const target = s.connections.find ((c) => c.provider_id === provider_id);
    // Check condition;
if (target.lastSyncAt = now) {}
  $2;
}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/resync.ts
