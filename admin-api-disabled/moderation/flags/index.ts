import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../utils/auth';
import { getFlags, createFlag } from '../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { 
    ensureAdmin(user); 
  } catch (e: unknown) { 
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' }); 
  }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query;
    const flags = await getFlags();
    
    const filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    
    return res.status(200).json({ flags: filtered });
  }

  if (req.method === 'POST') {
    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch {
      return res.status(500).json({ error: 'Failed to create flag' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}