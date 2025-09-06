<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
  writeState((s) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

    s && s.logs.push({
      id: `${now}-${providerId}-resync`,
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../lib / integrations / file_store';
import { getProviderById  } from '../../../lib / integrations / registry';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}

    });

}

<<<<<<< HEAD
=======
=======
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  const state = readState();
  const conn = state.connections.find(c => c.providerId === providerId);
  if (!conn) return res.status(400).json({ error: 'Provider not connected' });

  const now = Date.now();
  writeState(s => {
    s.logs.push({ id: `${now}-${providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now
  });
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
