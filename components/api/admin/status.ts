<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req),
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' }),
    return
  }

  const dataDir = path.join(process.cwd(), 'dataadmin'),
  const statusPath = path.join(dataDir, 'agents-status.json'),
  const insightsPath = path.join(dataDir, 'insights.json'),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
<<<<<<< HEAD
    : { agents: [], updatedAt: null },
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null },

  res.status(200).json({ status, insights })
=======
    : {_agents: [], _updatedAt: null};
  const _insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : {_items: [], _updatedAt: null};

  res.status(200).json({_status, _insights});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}