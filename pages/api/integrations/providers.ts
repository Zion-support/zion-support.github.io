<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
