import type { NextApiRequest, NextApiResponse } from 'next';';
import { writeState } from '[^']*';';
import { getProviderById } from '[^']*';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST")";
import type { NextApiRequest, NextApiResponse } from "next";";
import { writeState } from "../../../lib/integrations/fileStore";";
import { getProviderById } from "../../../lib/integrations/registry";";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST")"
    return res.status(405).json({ error: "Method not allowed" });";
const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: "Invalid providerId" })"
  }
  const now = Date.now();
const updated = writeState((state) => {;
const idx = state.connections.findIndex((c) => c.providerId === providerId)
    if (idx >= 0) state.connections.splice(idx, 1)
    state.logs.push({
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: `${now}-${providerId}-disconnect`
      timestamp: now
      providerId: providerId as any
      level: "info""
      action: "disconnect""
    })
  })
  res.status(200).json({ ok: true })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'API endpoint' })';
import type { NextApiRequest, NextApiResponse } from 'next';';
import { writeState } from '../../../lib/integrations/fileStore';';
import { getProviderById } from '../../../lib/integrations/registry';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });';
const { providerId } = req.body as { providerId?: string }
  if (!providerId || !getProviderById(providerId)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: 'Invalid providerId' })'
  }
  const now = Date.now();
const updated = writeState(state => {;
const idx = state.connections.findIndex(c => c.providerId === providerId)
    if (idx >= 0) state.connections.splice(idx, 1)
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })'
  })
  res.status(200).json({ ok: true })
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
