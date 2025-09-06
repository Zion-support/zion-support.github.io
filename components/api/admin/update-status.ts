import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== 'POST') {
    res && res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    return;
  }
  if (!isInternalAgentRequest(req)) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const body = req && req.body || {};
  const dataDir = path && path.join(process && process.cwd(), 'data', 'admin');
  if (!fs && fs.existsSync(dataDir)) fs && fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path && path.join(dataDir, 'agents-status && status.json');
  const existing = fs && fs.existsSync(statusPath)
    ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8'))
    : { agents: [] };

  const merged = {

    res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return
  }
  if (!isInternalAgentRequest(req)) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return
  }

  const body = req && req.body || {};
  const dataDir = path && path.join(process && process.cwd(), 'dataadmin');
  if (!fs && fs.existsSync(dataDir)) fs && fs.mkdirSync(dataDir, { recursive: true });
  const statusPath = path && path.join(dataDir, 'agents-status && status.json');
  const existing = fs && fs.existsSync(statusPath) ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8')) : { agents: [] };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
