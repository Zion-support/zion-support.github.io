import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======



import {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  getSessionFromReq,;
  isInternalAgentRequest,;


} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


}

<<<<<<< HEAD
=======
=======
  res.status(200).json({ status, insights })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


<<<<<<< HEAD

import {
  getSessionFromReq
  isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
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

=======
  res.status(200).json({ status, insights })

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
