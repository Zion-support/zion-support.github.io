import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const state = readState();
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ overrides: state.overrides });
=======
    return res.status(200).json({ overrides: state.overrides })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (req.method === 'POST') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean };
    if (!jobId) return res.status(400).json({ error: 'jobId required' });
    const updated = writeState(state => {
      const idx = state.overrides.findIndex(o => o.jobId === jobId);
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) {
        state.overrides[idx] = entry;
      } else {
        state.overrides.push(entry);
      }
    });
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
  }
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json({ overrides: state.overrides })
  }
  if (req.method === 'POST') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean };
    if (!jobId) return res.status(400).json({ error: 'jobId required' });
    const updated = writeState(state => {
      const idx = state.overrides.findIndex(o => o.jobId === jobId);
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) state.overrides[idx] = entry; else state.overrides.push(entry);
    });
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
