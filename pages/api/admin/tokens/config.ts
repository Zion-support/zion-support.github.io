import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig, setConfig } from "../../../../utils/tokenStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
  if (req.method === "POST") {
    const body = req.body || {};
    const current = getConfig();
    const updated = { ...current, ...body };
    setConfig(updated);
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: "Method not allowed" });
}