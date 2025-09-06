import type { NextApiRequest, NextApiResponse } from 'next';
import { readLogs } from '@/utils/zionBrain';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req))
    return res.status(401).json({ error: 'Unauthorized' });
=======
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { entries } = readLogs();
  const stuckOnly = req.query.stuck === '1' || req.query.stuck === 'true';

  if (stuckOnly) {
    return res.status(200).json({
      entries: entries.filter(
        e => e.status === 'stuck' || e.status === 'laggy'
      ),
    });  }

  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};
=======
    return res.status(200).json({ entries: entries.filter((e) => e.status === 'stuck' || e.status === 'laggy') });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  

  return res.status(200).json({
    entries: entries.slice(-200),
    byModule,
    byType,
    total: entries.length,
<<<<<<< HEAD
  });
=======
  for (const e of entries) {
    byModule[e.module] = (byModule[e.module] || 0) + 1;
    byType[String(e.type)] = (byType[String(e.type)] || 0) + 1
  }

  return res.status(200).json({ entries: entries.slice(-200), byModule, byType, total: entries.length });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
