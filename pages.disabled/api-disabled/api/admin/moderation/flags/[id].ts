import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid flag ID' });
  }

  if (req.method === 'GET') {
    try {
      const flag = await getFlagById(id);
      if (!flag) {
        return res.status(404).json({ error: 'Flag not found' });
      }
      return res.status(200).json({ flag });
    } catch (error) {
      console.error('Error fetching flag:', error);
      return res.status(500).json({ error: 'Failed to fetch flag' });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end('Method Not Allowed');
}