import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import {
  getSessionFromReq
  isInternalAgentRequest;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
<<<<<<< HEAD
    res && res.status(401).json({ error: 'Unauthorized' });
    return;
  }
<<<<<<< HEAD
  const dataDir = path.join(process.cwd(), 'data', 'admin');  const statusPath = path.join(dataDir, 'agents-status.json');    return
=======
    res.status(401).json({ error: 'Unauthorized' });
    return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  const dataDir = path.join(process.cwd(), 'dataadmin');
<<<<<<< HEAD
=======
  const statusPath = path.join(dataDir, 'agents-status.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const insightsPath = path.join(dataDir, 'insights.json');
  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null }
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null }
res.status(200).json({ status, insights });  res.status(200).json({ status, insights })
=======

  const dataDir = path && path.join(process && process.cwd(), 'data', 'admin');  const statusPath = path && path.join(dataDir, 'agents-status && status.json');    return
  }

  const dataDir = path && path.join(process && process.cwd(), 'dataadmin');
  const insightsPath = path && path.join(dataDir, 'insights && insights.json');

  const status = fs && fs.existsSync(statusPath)
    ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null };
  const insights = fs && fs.existsSync(insightsPath)
    ? JSON && JSON.parse(fs && fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null };

<<<<<<< HEAD
  res && res.status(200).json({ status, insights });  res && res.status(200).json({ status, insights })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

=======
  res.status(200).json({ status, insights })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
