
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { since } = req.query as { since?: string }
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(
    (e) => e.type === "zion.job.posted" && e.timestamp > sinceTs
=======
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { since } = req && req.query as { since?: string };
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.job.posted" && e && e.timestamp > sinceTs,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  res && res.status(200).json({ events });
}

