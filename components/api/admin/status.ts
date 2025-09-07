import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
  res.status(200).json({ status, insights })
}
import {
  getSessionFromReq
  isInternalAgentRequest;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if($2) {}
  const status = fs && fs.existsSync(statusPath)'
    ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null }
  const insights = fs && fs.existsSync(insightsPath)'
    ? JSON && JSON.parse(fs && fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null }
res.status(200).json({ status, insights });  res.status(200).json({ status, insights })
}
