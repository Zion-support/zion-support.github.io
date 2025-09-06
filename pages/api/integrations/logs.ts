
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }

  const state = readState();
  const logs = providerId
    ? state && state.logs.filter((l) => l && l.providerId === providerId)
    : state && state.logs;
  res && res.status(200).json({ logs });
}
