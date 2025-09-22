import { getFlagById } from '../../../../../utils/moderationDb',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const user = parseUserFromRequest(req),'
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  res.setHeader('AllowGET'),
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { getFlagById } from '../../../../../utils/moderationDb',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  res.setHeader('AllowGET')
  return res.status(405).end('Method Not Allowed');
};

'
  res.setHeader('AllowGET'),';
  return res.status(405).end('Method Not Allowed');
};'
