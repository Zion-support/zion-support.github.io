<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';

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
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
