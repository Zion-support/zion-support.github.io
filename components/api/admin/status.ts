import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
  res.status(200).json({ status, insights })
}
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import {
<<<<<<< HEAD
  getSessionFromReq
  isInternalAgentRequest;
=======
  getSessionFromReq,;
  isInternalAgentRequest,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
=======
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
<<<<<<< HEAD
  const dataDir = path.join(process.cwd(), 'data', 'admin');  const statusPath = path.join(dataDir, 'agents-status.json');    return
  }
  const dataDir = path.join(process.cwd(), 'dataadmin');
  const insightsPath = path.join(dataDir, 'insights.json');
  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null }
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null }
res.status(200).json({ status, insights });  res.status(200).json({ status, insights })
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  const dataDir = path.join(process.cwd(), 'data', 'admin');
  const statusPath = path.join(dataDir, 'agents-status.json');
  const insightsPath = path.join(dataDir, 'insights.json');

  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null };
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null };

  res.status(200).json({ status, insights });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
