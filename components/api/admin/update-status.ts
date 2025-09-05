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
}