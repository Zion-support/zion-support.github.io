<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readState } from '../../../../lib/integrations/fileStore',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const { since } = req.query as { since?: string },
  const state = readState(),
  const sinceTs = since ? Number(since) : 0,
  const events = state.events.filter(e => e.type === 'zion.job.posted' && e.timestamp > sinceTs),
  res.status(200).json({ events })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const {_since} = req.query as {_since?: string};
  const _state = readState();
  const _sinceTs = since ? Number(since) : 0;
  const _events = state.events.filter(e => e.type === 'zion.job.posted' && e.timestamp > sinceTs);
  res.status(200).json({_events});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}