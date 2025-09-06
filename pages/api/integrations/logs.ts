import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string };
  const state = readState();
  const logs = providerId
    ? state.logs.filter(l => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status($1).json({$2});
  const { providerId } = req.query as { providerId?: string };
  const state = readState();
  const logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs;
  res.status(200).json({ logs })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
