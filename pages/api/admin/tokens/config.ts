import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig());
  }
  if (req.method === "POST") {
    const updated = { success: true };
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: "Method not allowed" });
}

