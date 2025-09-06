
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }
=======
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const state = readState();
  const logs = providerId
    ? state && state.logs.filter((l) => l && l.providerId === providerId)
    : state && state.logs;
  res && res.status(200).json({ logs });
}

