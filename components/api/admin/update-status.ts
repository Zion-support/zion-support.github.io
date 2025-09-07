import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }
  if (!isInternalAgentRequest(req)) {
    res.status(401).json($2);
    return
  }
  const body = $2;
  const dataDir = path.join(process.cwd(), 'dataadmin'),
  if (!fs.existsSync(dataDir)) fs.mkdirSync($2);
  const statusPath = path.join($2);
  const existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) : { agents: [] },

  const merged = $2;
    ...body,
    updatedAt: new Date().toISOString()},
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2)),
  res.status(200).json({ ok: true})
}