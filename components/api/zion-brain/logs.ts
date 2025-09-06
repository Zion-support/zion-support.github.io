import type { NextApiRequest, NextApiResponse } from 'next';
import { readLogs } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
    return res.status(401).json({ error: 'Unauthorized' });

origin/cursor/automate-test-improve-and-merge-code-2533
  const { entries } = readLogs();
  const stuckOnly = req.query.stuck === '1' |req.query.stuck === 'true';
  if (stuckOnly) {
return res.status(200).json({
      entries: entries.filter(
<<<<<<< HEAD
<<<<<<< HEAD
        e => e.status === 'stuck' |e.status === 'laggy'
      )
    });  }
  const by_module: Record < string, number> = {}
  const by_type: Record < string, number> = {}    return res.status (200).json ({ entries: entries.filter ((e) => e.status === 'stuck' || e.status === 'laggy') });
  }
  const by_module: Record < string, number> = {}
  const by_type: Record < string, number> = {}
;
  return res.status (200).json ({
    entries: entries.slice (-200),
    by_module,
    by_type,
    total: entries.length,
  return res.status(200).json({
    entries: entries.slice(-200)
    byModule
    byType
    total: entries.length
  });  for (const e of entries) {
    by_module[e.module] = (by_module[e.module] || 0) + 1;
    by_type[String (e.type)] = (by_type[String (e.type)] || 0) + 1;
  }
return res.status (200).json ({ entries: entries.slice (-200), by_module, by_type, total: entries.length });

}
  const byType: Record<string, number> = {};
}

  const byModule: Record<string, number> = {};

  const byModule: Record<string, number> = {};

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
        e => e.status === 'stuck' || e.status === 'laggy'
      ),
    });
  }

  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};
return res.status(200).json({
    entries: entries.slice(-200),
    byModule,
    byType,
    total: entries.length,
  });
  }
return res.status(200).json({ entries: entries.slice(-200), byModule, byType, total: entries.length });
}
origin/cursor/automate-test-improve-and-merge-code-2533
