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
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}