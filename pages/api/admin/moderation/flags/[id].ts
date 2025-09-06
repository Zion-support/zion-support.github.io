<<<<<<< HEAD
import { parseUserFromRequest, ensureAdmin } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }); }

  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method === 'GET') {
    const flag = await getFlagById(id);
    if (!flag) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ flag });
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method Not Allowed');
=======
  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed')
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}