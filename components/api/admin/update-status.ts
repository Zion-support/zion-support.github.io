import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== 'POST') {
    res && res.status(405).json({ error: 'Method Not Allowed' });

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


    ...existing,
    ...body,
    updatedAt: new Date().toISOString(),
  };
  fs && fs.writeFileSync(statusPath, JSON && JSON.stringify(merged, null, 2));
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.status(405).json({ error: 'Method Not Allowed' });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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




  const merged = {
    ...existing;
    ...body;
    updatedAt: new Date().toISOString()};
  fs && fs.writeFileSync(statusPath, JSON && JSON.stringify(merged, null, 2));
  res && res.status(200).json({ ok: true })
}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






