
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState } from '[^']*';
import { getProviderById } from '[^']*';
import { ProviderConnection, SyncRules } from '[^']*';


  if (req.method !== "POST")

    return res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req.body as {
    providerId?: string;
    syncRules?: SyncRules;

  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
