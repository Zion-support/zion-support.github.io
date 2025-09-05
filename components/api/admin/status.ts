import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _session = getSessionFromReq(req);
  const _internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized'});
    return;
  }

  const _dataDir = path.join(process.cwd(), 'data', 'admin');
  const _statusPath = path.join(dataDir, 'agents-status.json');
  const _insightsPath = path.join(dataDir, 'insights.json');

  const _status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : {_agents: [], _updatedAt: null};
  const _insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : {_items: [], _updatedAt: null};

  res.status(200).json({_status, _insights});
}