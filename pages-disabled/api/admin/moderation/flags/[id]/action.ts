import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = parseUserFromRequest(req);
  try {}
    ensureAdmin(user);
  } catch (e: any) {'
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }
  const { id } = req.query;'
  if (typeof id !== 'string') {'
    return res.status(400).json({ error: 'Invalid id' });

    return res.status(200).json({ flag })
  }
'
  res.setHeader('AllowPOST'),;'
  return res.status(405).end('Method Not Allowed');
};

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {