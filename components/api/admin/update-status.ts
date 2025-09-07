import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path'
    return
  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' })
    return
import { isInternalAgentRequest } from '../../../utils/adminAuth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {
    res.status(405).json({ error: 'Method Not Allowed' })
    return

  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const body = req.body |{}
  const dataDir = path.join(process.cwd(), 'dataadmin');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path.join(dataDir, 'agents-status.json');
  const existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) : { agents: [] }
  const merged = {
    ...existing;
    ...body;
    updatedAt: new Date().toISOString()}
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2));

  res.status(200).json({ ok: true })
}
