<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST")
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD
=======
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return res.status(400).json({ error: "Invalid providerId" });
  }
  const now = Date.now();
  const updated = writeState((state) => {
    const idx = state.connections.findIndex((c) => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
    state.logs.push({
<<<<<<< HEAD
      id: `${now}-${providerId}-disconnect`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "disconnect"
=======
<<<<<<< HEAD
=======
      id: `${now}-${providerId}-disconnect`,
      timestamp: now,
      providerId: providerId as any,
      level: "info",
      action: "disconnect",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    });
  });

}
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const now = Date.now();
  const updated = writeState(state => {
    const idx = state.connections.findIndex(c => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, 1);
    state.logs.push({ id: `${now}-${providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' })
  });
  res.status(200).json({ ok: true })

}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  res.status (200).json ({ ok: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
