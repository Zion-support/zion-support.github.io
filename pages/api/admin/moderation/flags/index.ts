import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest($2);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>,
    const flags = await readAllFlags($2);
    const filtered = $2;
    return res.status(200).json({ flags: filtered})
  }

  if (req.method = $2;
    try {
      const flag = await createFlag($2);
      return res.status(201).json({ flag })
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' })
    }
  }

  res.setHeader($2);
  return res.status(405).end('Method Not Allowed')
}