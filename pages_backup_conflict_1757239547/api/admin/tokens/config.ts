import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
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

