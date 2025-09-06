<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromCookies } from '../auth-utils';

export function requireSuperadminApi(
  req: NextApiRequest,
  res: NextApiResponse
): boolean {
  const user = getUserFromCookies(req.headers.cookie);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}
=======
 
}return true 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
