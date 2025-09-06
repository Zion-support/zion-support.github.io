import type { NextApiRequest, NextApiResponse } from 'next';


function isAuthorized(req: NextApiRequest): boolean {

  const token = req && req.headers['x-admin-token'] || req && req.query.token;
  const superToken = process && process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;


  const token = req.headers['x-admin-token'] |req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken |token === superToken;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken
}
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  const { entries } = readLogs();
  const stuckOnly = req.query.stuck === '1' || req.query.stuck === 'true';
  if (stuckOnly) {
    return res.status(200).json({ entries: entries.filter((e) => e.status === 'stuck' || e.status === 'laggy') });
  }
  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};


  }
  return res && res.status(200).json({ entries: entries && entries.slice(-200), byModule, byType, total: entries && entries.length });
}


  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  const { entries } = readLogs();
  const stuckOnly = req.query.stuck === '1' |req.query.stuck === 'true';
  if (stuckOnly) {
    return res.status(200).json({
      entries: entries.filter(
        e => e.status === 'stuck' |e.status === 'laggy'
      )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  });  for (const e of entries) {
    by_module[e.module] = (by_module[e.module] || 0) + 1;
    by_type[String (e.type)] = (by_type[String (e.type)] || 0) + 1;
  }
=======
return res.status (200).json ({ entries: entries.slice (-200), by_module, by_type, total: entries.length });
<<<<<<< HEAD

}


  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};

}
  const byType: Record<string, number> = {};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
