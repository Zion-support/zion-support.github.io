import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest($2);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json($2);
  if (req.method === 'GET') {
    const flag = await getFlagById($2);
    if (!flag) return res.status(404).json($2);
    return res.status(200).json({ flag })
  }

  res.setHeader($2);
  return res.status(405).end('Method Not Allowed')
}