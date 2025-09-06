import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
<<<<<<< HEAD
    return;
  }

  const dataDir = path.join(process.cwd(), 'data', 'admin');
=======
    return
  }

  const dataDir = path.join(process.cwd(), 'dataadmin');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
  }

  const dataDir = path.join(process.cwd(), 'dataadmin');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const statusPath = path.join(dataDir, 'agents-status.json');
  const insightsPath = path.join(dataDir, 'insights.json');

  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null };
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null };

<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ status, insights });
=======
  res.status(200).json({ status, insights })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ status, insights })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
