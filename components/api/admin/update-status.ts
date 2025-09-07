<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
    return;
  }
  if (!isInternalAgentRequest(req)) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';
    return;
  }
  if (!isInternalAgentRequest(req)) {'
    res && res.status(401).json({ error: 'Unauthorized' });
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  if (!isInternalAgentRequest(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  res.status(200).json({ ok: true });
}