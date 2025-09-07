import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


import { isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {}
    res.status(405).json({error: 'Method Not Allowed'}
});
  res.status(200).json({ok: true}
});
    return;
  }
  if (!isInternalAgentRequest(req)) {}
    res && res.status(401).json({error: 'Unauthorized'}
});
    return;
  }

const body = null;
  res.status(200).json({ ok: true }),
}

