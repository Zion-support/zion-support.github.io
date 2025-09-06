<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getWalletSummary } from '../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });
  }
  try {
    const summary = getWalletSummary(userId);
    return res.status(200).json(summary);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
}
=======
 
}try {
  const summary = getWalletSummary (userId);
return res.status (200) .json (summary) 
}catch (err: any) {
  
}
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
