import type { NextApiRequest, NextApiResponse } from 'next';


import { readLogs } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {}
    return res.status(401).json({ error: 'Unauthorized',}
});

const { entries } = readLogs();

const stuckOnly = req.query.stuck === '1' |req.query.stuck === 'true';
  if (stuckOnly) {
return res.status(200).json({
      entries: entries.filter(

        e => e.status === 'stuck' || e.status === 'laggy'}
      ),}
    });
  }

const byModule: Record<string, number    /> = {};

const byType: Record<string, number    /> = {};
return res.status(200).json({
    entries: entries.slice(-200),
    byModule,
    byType,}
    total: entries.length,}
  });
  }
return res.status(200).json({ entries: entries.slice(-200), byModule, byType, total: entries.length,}
});
}

