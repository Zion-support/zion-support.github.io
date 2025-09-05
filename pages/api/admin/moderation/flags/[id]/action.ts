<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',
import { updateFlagStatus } from '../../../../../../utils/moderationDb',
import type { ModerationStatus } from '../../../../../../types/moderation',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),

  if (req.method === 'POST') {
    const { action, adminNotes } = req.body || {} as { action: string, adminNotes?: string },
    const actionMap: Record<string ModerationStatus> = {
      approve: 'approved',
      remove: 'removed',
      warn: 'warned',
      ban: 'banned'},
    const status = actionMap[action],
    if (!status) return res.status(400).json({ error: 'Invalid action' }),
    const flag = await updateFlagStatus(id, status, adminNotes),
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_ModerationStatus} from '../../../../../../types/moderation';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = parseUserFromRequest(req);
  try { ensureAdmin(user);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'}); }

  const {_id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});

  if (req.method === 'POST') {_const { action, _adminNotes} = req.body || {} as {_action: string; adminNotes?: string};
    const actionMap: Record<string, ModerationStatus> = {_approve: 'approved', _remove: 'removed', _warn: 'warned', _ban: 'banned'};
    const _status = actionMap[action];
    if (!status) return res.status(400).json({_error: 'Invalid action'});
    const _flag = await updateFlagStatus(id, status, adminNotes);
    if (!flag) return res.status(404).json({_error: 'Not found'});
    return res.status(200).json({_flag});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowPOST'),
  return res.status(405).end('Method Not Allowed')
}