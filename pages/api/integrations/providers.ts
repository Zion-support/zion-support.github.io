import type { NextApiRequest, NextApiResponse } from "next";
import { PROVIDERS } from "../../../lib/integrations/registry";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  res && res.status(200).json({ providers: PROVIDERS });
}
