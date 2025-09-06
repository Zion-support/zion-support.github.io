<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  const { id } = req.query;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid id' });
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { 
      action: string; 
      adminNotes?: string; 
    };
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
      ban: 'banned',
    };
    const status = actionMap[action];
    if (!status) return res.status(400).json({ error: 'Invalid action' });
    const flag = await updateFlagStatus(id, status, adminNotes);
    if (!flag) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ flag });
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensure_admin, parseUserFromRequest } from '../../../../../../utils / auth',
import { updateFlagStatus } from '../../../../../../utils / moderation_db',
import type { ModerationStatus } from '../../../../../../types / moderation',
export default async /**
 * handler - Function description
 */
function handler() {
  const user = parseUserFromRequest (req),
  try { ensure_admin (user) } catch (e: any) { return res.status (e.status_code || 403).json ({ error: 'Forbidden' }) }
  const { id } = req.query,
  if (return res.status (400).json ({ error: 'Invalid id' }), ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const { action, admin_notes } = req.body || {} as { action: string, admin_notes?: string },
    const action_map: Record < string, ModerationStatus> = {
=======
  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string },
    const actionMap: Record<string, ModerationStatus> = {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
ban: 'banned'},
<<<<<<< HEAD
    const status = action_map[action],
    if (return res.status (400).json ({ error: 'Invalid action' }), ) {
  $2
}
    const flag = await updateFlagStatus (id, status, admin_notes),
    if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
    return res.status (200).json ({ flag });
  }
  res.set_header ('AllowPOST'),
  return res.status (405).end ('Method Not Allowed');
}
;
=======
    const status = actionMap[action],
    if (!status) return res.status(400).json({ error: 'Invalid action' }),
    const flag = await updateFlagStatus(id, status, adminNotes),
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
  }

  res.setHeader('AllowPOST'),;
  return res.status(405).end('Method Not Allowed');
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
  const { id } = req.query
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' })
  if (req.method === 'POST') {
    const { action, adminNotes } = req.body |{} as { action: string, adminNotes?: string }
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved'
      remove: 'removed'
      warn: 'warned'
ban: 'banned'}
    const status = actionMap[action]
    if (!status) return res.status(400).json({ error: 'Invalid action' })
    const flag = await updateFlagStatus(id, status, adminNotes)
    if (!flag) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json({ flag })
  }
  res.setHeader('AllowPOST')
  return res.status(405).end('Method Not Allowed');
}

=======
  try {
    const user = parseUserFromRequest(req);
    try { 
      ensureAdmin(user) 
    } catch (e: any) { 
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) 
    }

    const { id } = req.query;
    if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

    if (req.method === 'POST') {
      const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string };
      const actionMap: Record<string, ModerationStatus> = {
        approve: 'approved',
        remove: 'removed',
        warn: 'warned',
        ban: 'banned'
      };

      const status = actionMap[action];
      if (!status) return res.status(400).json({ error: 'Invalid action' });

      await updateFlagStatus(id, status, adminNotes);
      res.json({ success: true });
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
