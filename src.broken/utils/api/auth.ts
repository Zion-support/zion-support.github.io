<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getUserFromCookies } from '../auth-utils',;
;
export function requireSuperadminApi(req:NextApiRequest, res:NextApiResponse):boolean {;
  const user = getUserFromCookies(req.headers.cookie),;
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {;
    res.status(401).json({ error:'Unauthorized' }),;
    return false,;
  }
  return true,;
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromCookies } from '../auth-utils',
export function requireSuperadminApi(req: NextApiRequest, res: NextApiResponse): boolean {
  const user = getUserFromCookies(req.headers.cookie),
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized' }),
    return false  }
  return true
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
