<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { 
      action: string; 
      adminNotes?: string; 
    };
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
ban: 'banned'},
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';
<<<<<<< HEAD
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string },
    const actionMap: Record<string, ModerationStatus> = {
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
      ban: 'banned'},
    const status = actionMap[action],
    if (!status) return res.status(400).json({ error: 'Invalid action' }),
    const flag = await updateFlagStatus(id, status, adminNotes),
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
  }

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.setHeader('AllowPOST'),
  return res.status(405).end('Method Not Allowed');
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
