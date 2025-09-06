import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { isInternalAgentRequest } from '../../../utils/adminAuth';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  if (!isInternalAgentRequest(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  const body = req.body || {};
  const dataDir = path.join(process.cwd(), 'data', 'admin');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path.join(dataDir, 'agents-status.json');
  const existing = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [] };

  const merged = {
    ...existing,
    ...body,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2));
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return
  }
  if (!isInternalAgentRequest(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  const body = req.body || {};
  const dataDir = path.join(process.cwd(), 'dataadmin');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path.join(dataDir, 'agents-status.json');
  const existing = fs.existsSync(statusPath) ? JSON.parse(fs.readFileSync(statusPath, 'utf8')) : { agents: [] };

  const merged = {
    ...existing;
    ...body;
    updatedAt: new Date().toISOString()};
  fs.writeFileSync(statusPath, JSON.stringify(merged, null, 2));
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
