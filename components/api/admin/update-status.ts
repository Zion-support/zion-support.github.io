<<<<<<< HEAD
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
  res.status(200).json({ ok: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed'});
    return;
  }
  if (!isInternalAgentRequest(req)) {_res.status(401).json({ error: 'Unauthorized'});
    return;
  }
  const _body = req.body || {};
  const _dataDir = path.join(process.cwd(), 'data', 'admin');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, {_recursive: true});
  const _statusPath = path.join(dataDir, 'agents-status.json');
  const _existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) : {_agents: []};

  const _merged = {_...existing, _...body, _updatedAt: new Date().toISOString()};
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2));
  res.status(200).json({_ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}