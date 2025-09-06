import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromCookies } from '../auth-utils';
export function requireSuperadminApi(req: NextApiRequest, res: NextApiResponse): boolean {
  const user = getUserFromCookies($2);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json($2);
    return false
  }
  return true
}
