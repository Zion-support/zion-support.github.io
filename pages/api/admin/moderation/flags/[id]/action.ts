import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  ensureAdmin,
  parseUserFromRequest,;
} from '../../../../../../utils/auth';
=======
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'POST') {
<<<<<<< HEAD
    const { action, adminNotes } =
      req.body || ({} as { action: string; adminNotes?: string });
=======
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
<<<<<<< HEAD
<<<<<<< HEAD
      ban: 'banned',
=======
      ban: 'banned'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ban: 'banned'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
    const status = actionMap[action];
    if (!status) return res.status(400).json({ error: 'Invalid action' });
    const flag = await updateFlagStatus(id, status, adminNotes);
    if (!flag) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ flag });
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
=======
    return res.status(200).json({ flag })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ flag })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
