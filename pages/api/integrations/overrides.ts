import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === "GET") {
    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
  if (req && req.method === "POST") {
    const { jobId, disableCrmSync, disableAtsSync } = req && req.body as {
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    };
    if (!jobId) return res && res.status(400).json({ error: "jobId required" });
    const updated = writeState((state) => {
      const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId);
      const entry = {
        jobId,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      };
      if (idx >= 0) state && state.overrides[idx] = entry;
      else state && state.overrides.push(entry);
    });
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
    });
  }
  return res && res.status(405).json({ error: "Method not allowed" });
}
