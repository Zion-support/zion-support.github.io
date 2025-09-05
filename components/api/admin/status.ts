<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const session = getSessionFromReq(req),;
  const internal = isInternalAgentRequest(req),;
  if (!session && !internal) {;
    res.status(401).json({ error:'Unauthorized' }),;
    return,;
  }
;
  const dataDir = path.join(process.cwd(), 'dataadmin'),;
  const statusPath = path.join(dataDir, 'agents-status.json'),;
  const insightsPath = path.join(dataDir, 'insights.json'),;
;
  const status = fs.existsSync(statusPath);
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'));
    :{ agents:[], updatedAt:null },;
  const insights = fs.existsSync(insightsPath);
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'));
    :{ items:[], updatedAt:null },;
;
  res.status(200).json({ status, insights }),;
}
=======
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
  const _status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null },
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null },

  res.status(200).json({ status, insights })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
