import type {_NextApiRequest, _NextApiResponse} from 'next';

export function requireSuperadminApi(_req: NextApiRequest, _res: NextApiResponse): boolean {_const _user = getUserFromCookies(req.headers.cookie);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized'});
    return false;
  }
  return true;
}
