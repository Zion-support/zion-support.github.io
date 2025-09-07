import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method;
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
=======
  if (req.method === "GET") {
    const state = readState();
    return res.status(200).json({ overrides: state.overrides });
  }
  if (req.method === "POST") {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as {
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    }
    if (!jobId) return res.status(400).json({ error: "jobId required" });
    const updated = writeState((state) => {
      const idx = state.overrides.findIndex((o) => o.jobId === jobId);
      const entry = {
        jobId
        disableCrmSync: !!disableCrmSync
        disableAtsSync: !!disableAtsSync
      }
      if (idx >= 0) state.overrides[idx] = entry;
      else state.overrides.push(entry);
    });
    return res.status(200).json({
      ok: true
      override: updated.overrides.find((o) => o.jobId === jobId)
    });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  return res.status(405).json({ error: "Method not allowed" });
}