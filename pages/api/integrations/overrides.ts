import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD

  if (req.method === "GET") {
=======
  if (req && req.method === "GET") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
  if (req && req.method === "POST") {
    const { jobId, disableCrmSync, disableAtsSync } = req && req.body as {
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
<<<<<<< HEAD
    }
    if (!jobId) return res.status(400).json({ error: "jobId required" });
=======
    };
    if (!jobId) return res && res.status(400).json({ error: "jobId required" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const updated = writeState((state) => {
      const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId);
      const entry = {
<<<<<<< HEAD
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
=======
        jobId,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      };
      if (idx >= 0) state && state.overrides[idx] = entry;
      else state && state.overrides.push(entry);
=======
  if (req.method === 'GET') {
    const state = readState();
    return res.status(200).json({ overrides: state.overrides })
  }
  if (req.method === 'POST') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean };
    if (!jobId) return res.status(400).json({ error: 'jobId required' });
    const updated = writeState(state => {
      const idx = state.overrides.findIndex(o => o.jobId === jobId);
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) state.overrides[idx] = entry; else state.overrides.push(entry);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    });
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });

  }
<<<<<<< HEAD
  return res.status(405).json({ error: "Method not allowed" });
}
<<<<<<< HEAD
=======
  return res && res.status(405).json({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
