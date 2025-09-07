import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
<<<<<<< HEAD:pages/api/admin/tokens/config.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig());
  }
  if (req.method === "POST") {
    const { config } = req.body || {};
    if (!config) {
      return res.status(400).json({ error: "Config data required" });
    }
    tokenStore.setConfig(config);
    return res.status(200).json({ success: true });
  }
  return res.status(405).json({ error: "Method not allowed" });
}

=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const config = getConfig();
    return res.status(200).json(config);
  }

  if (req.method === "POST") {
const body = req.body |{}
    const current = tokenStore.getConfig()
    const updated = { ...current, ...body }
    tokenStore.setConfig(updated)
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/admin/tokens/config.ts
