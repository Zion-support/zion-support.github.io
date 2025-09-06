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
