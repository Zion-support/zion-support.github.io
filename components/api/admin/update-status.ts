<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
import { isInternalAgentRequest } from '../../../utils/adminAuth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.status(405).json({ error:'Method Not Allowed' }),;
    return,;
  }
  if (!isInternalAgentRequest(req)) {;
    res.status(401).json({ error:'Unauthorized' }),;
    return,;
  }
  const body = req.body || {},;
  const dataDir = path.join(process.cwd(), 'dataadmin'),;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive:true }),;
  const statusPath = path.join(dataDir, 'agents-status.json'),;
  const existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) :{ agents:[] },;
;
  const merged = {;
    ...existing,;
    ...body,;
    updatedAt:new Date().toISOString()},;
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2)),;
  res.status(200).json({ ok:true }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
import { isInternalAgentRequest } from '../../../utils/adminAuth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' }),
    return
  }
  if (!isInternalAgentRequest(req)) {
    res.status(401).json({ error: 'Unauthorized' }),
    return
  }
  const body = req.body || {},
  const dataDir = path.join(process.cwd(), 'dataadmin'),
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true }),
  const statusPath = path.join(dataDir, 'agents-status.json'),
  const existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) : { agents: [] },

  const merged = {
    ...existing,
    ...body,
    updatedAt: new Date().toISOString()},
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2)),
  res.status(200).json({ ok: true })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
