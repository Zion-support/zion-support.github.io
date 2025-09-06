import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const state = readState();
  const connections: Record<string, any> = {};
  ;
  }
  res.status(200).json({ connections });
