import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq($2);
  const internal = isInternalAgentRequest($2);
  if (!session && !internal) {
    res.status(401).json($2);
    return
  }

  const dataDir = path.join(process.cwd(), 'dataadmin'),
  const statusPath = path.join($2);
  const insightsPath = path.join($2);
  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null},
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null},

  res.status(200).json({ status, insights })
}