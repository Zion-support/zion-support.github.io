import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method = $2;
    const current = tokenStore.getConfig($2);
    const updated = { ...current, ...body },
    tokenStore.setConfig($2);
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}