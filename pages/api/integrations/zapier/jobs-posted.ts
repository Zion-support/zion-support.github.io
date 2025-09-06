import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  const { since } = req.query as { since?: string };
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(
    e => e.type === 'zion.job.posted' && e.timestamp > sinceTs
  );
  res.status(200).json({ events });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status($1).json({$2});
  const { since } = req.query as { since?: string };
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(e => e.type === 'zion.job.posted' && e.timestamp > sinceTs);
  res.status(200).json({ events })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
