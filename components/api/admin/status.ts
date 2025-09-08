import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {}
  const status = fs && fs.existsSync(statusPath)'
    ? JSON && JSON.parse(fs && fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null };
  const insights = fs && fs.existsSync(insightsPath)'
    ? JSON && JSON.parse(fs && fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null };
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}



<<<<<<< HEAD




=======
  res.status(200).json({ status, insights })
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
