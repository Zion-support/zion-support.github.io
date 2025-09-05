<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',
import { getFlagById } from '../../../../../utils/moderationDb',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),

  if (req.method === 'GET') {
    const flag = await getFlagById(id),
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = parseUserFromRequest(req);
  try { ensureAdmin(user);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'}); }

  const {_id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});

  if (req.method === 'GET') {_const _flag = await getFlagById(id);
    if (!flag) return res.status(404).json({ error: 'Not found'});
    return res.status(200).json({_flag});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET'),
  return res.status(405).end('Method Not Allowed')
}