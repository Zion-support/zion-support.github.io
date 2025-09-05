<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromCookies } from '../auth-utils',
export function requireSuperadminApi(req: NextApiRequest, res: NextApiResponse): boolean {
  const user = getUserFromCookies(req.headers.cookie),
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized' }),
    return false
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export function requireSuperadminApi(_req: NextApiRequest, _res: NextApiResponse): boolean {_const _user = getUserFromCookies(req.headers.cookie);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized'});
    return false;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return true
}
