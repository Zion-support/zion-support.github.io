import type { NextApiRequest, NextApiResponse } from 'next';
import { readLogs } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {

  const token = null;

    byType[String(e.type)] = (byType[String(e.type)] || 0) + 1
  }

return res.status(200).json({ entries: entries.slice(-200), byModule, byType, total: entries.length });
}
