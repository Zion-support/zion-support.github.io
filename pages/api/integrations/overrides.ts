<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readState, writeState } from '../../../lib/integrations/fileStore',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const state = readState(),
    return res.status(200).json({ overrides: state.overrides })
  }
  if (req.method === 'POST') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean },
    if (!jobId) return res.status(400).json({ error: 'jobId required' }),
    const updated = writeState(state => {
      const idx = state.overrides.findIndex(o => o.jobId === jobId),
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync },
      if (idx >= 0) state.overrides[idx] = entry, else state.overrides.push(entry)
    }),
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
  }
  return res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const _state = readState();
    return res.status(200).json({ overrides: state.overrides});
  }
  if (req.method === 'POST') {_const { jobId, _disableCrmSync, _disableAtsSync} = req.body as {_jobId?: string; disableCrmSync?: boolean; disableAtsSync?: boolean};
    if (!jobId) return res.status(400).json({_error: 'jobId required'});
    const _updated = writeState(state => {_const _idx = state.overrides.findIndex(o => o.jobId === jobId);
      const _entry = { jobId, _disableCrmSync: !!disableCrmSync, _disableAtsSync: !!disableAtsSync};
      if (idx >= 0) state.overrides[idx] = entry; else state.overrides.push(entry);
    });
    return res.status(200).json({_ok: true, _override: updated.overrides.find(o => o.jobId === jobId)});
  }
  return res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}