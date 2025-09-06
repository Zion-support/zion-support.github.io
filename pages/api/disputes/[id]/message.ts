import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
