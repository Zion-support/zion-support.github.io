import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});
  const _user = parseUserFromRequest(req);

  if (req.method === 'POST') {_const _dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found'});
    try {_ensureInvolvedOrAdmin(user, _dispute.clientUserId, _dispute.talentUserId);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'});
    }
    const {_body} = req.body || {};
    if (!body || typeof body !== 'string') return res.status(400).json({_error: 'Message body required'});
    const _now = new Date().toISOString();
    dispute.messages.push({_id: `${Date.now()}`,
      authorUserId: user.id,
      authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),
      body,
      createdAt: now});
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({_dispute});
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}