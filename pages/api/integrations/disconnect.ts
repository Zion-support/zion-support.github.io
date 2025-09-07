<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { providerId } = req.body as { providerId?: string },
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now($2);
  const updated = writeState($2);
    if (idx >= 0) state.connections.splice($2);
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })
  }),
  res.status(200).json({ ok: true})
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState } from "../../../lib/integrations/fileStore";

import { getProviderById } from "../../../lib/integrations/registry";
export default function handler() { return null; }
    return res.status(405).json({ error: "Method not allowed" });

    return res.status(400).json({ error: "Invalid providerId" });

  }
  const now = Date.now();
  const updated = writeState((state) => {}
    const idx = state.connections.findIndex((c) => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);

import { writeState } from '../../../lib/integrations/fileStore';

import { getProviderById } from '../../../lib/integrations/registry';
export default function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {'
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now();
  const updated = writeState(state => {}
    const idx = state.connections.findIndex(c => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);'
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })
  });
  res.status(200).json({ ok: true })

}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  res.status (200).json ({ ok: true });
>>>>>>> origin/chore/fix-lint-and-merge
}