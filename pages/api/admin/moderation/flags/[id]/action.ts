<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;'
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;'
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const user = parseUserFromRequest(req),'
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }



export default async function handler(req: NextApiRequest, res: NextApiResponse) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const user = parseUserFromRequest(req);
  try {}
    ensureAdmin(user);
  } catch (e: any) {'
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }
  const { id } = req.query;'
  if (typeof id !== 'string') {'
    return res.status(400).json({ error: 'Invalid id' });
<<<<<<< HEAD
  }
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' })

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { 
      action: string; 
      adminNotes?: string; 
    };
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved'
      remove: 'removed'
      warn: 'warned'
ban: 'banned'}
    const status = actionMap[action]
    if (!status) return res.status(400).json({ error: 'Invalid action' })
    const flag = await updateFlagStatus(id, status, adminNotes)
    if (!flag) return res.status(404).json({ error: 'Not found' })
=======
  }'
import type { NextApiRequest, NextApiResponse } from 'next',;'
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;'
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;'
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const user = parseUserFromRequest(req),'
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query,'
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),
'
  if (req.method === 'POST') {}
    const { action, adminNotes } = req.body || {} as {};
      action: string; 
      adminNotes?: string; 
    };
    const actionMap: Record<string, ModerationStatus> = {'
      approve: 'approved','
      remove: 'removed','
      warn: 'warned','
ban: 'banned'},
    const status = actionMap[action],'
    if (!status) return res.status(400).json({ error: 'Invalid action' }),
    const flag = await updateFlagStatus(id, status, adminNotes),'
    if (!flag) return res.status(404).json({ error: 'Not found' }),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(200).json({ flag })
  }
'
  res.setHeader('AllowPOST'),;'
  return res.status(405).end('Method Not Allowed');
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
=======

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string }
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
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import type { NextApiRequest, NextApiResponse } from 'next';
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }); }

  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string };
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

  return res.status(405).end('Method Not Allowed');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======

'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';'
import { updateFlagStatus } from '../../../../../../utils/moderationDb';'
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
'
  if (req.method === 'POST') {}
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string },
    const actionMap: Record<string, ModerationStatus> = {'
      approve: 'approved','
      remove: 'removed','
      warn: 'warned','
      ban: 'banned'},
    const status = actionMap[action],'
    if (!status) return res.status(400).json({ error: 'Invalid action' }),
    const flag = await updateFlagStatus(id, status, adminNotes),'
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
  }
'
  res.setHeader('AllowPOST'),';
  return res.status(405).end('Method Not Allowed');
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
