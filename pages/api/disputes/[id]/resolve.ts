import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});
  const _user = parseUserFromRequest(req);

  if (req.method === 'POST') {_try {
      ensureAdmin(user);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'});
    }
    const _dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({_error: 'Not found'});
    const {_resolutionSummary, _status} = req.body || {};
    const _now = new Date().toISOString();

    if (status && !['Resolved', 'Under Review', 'Open'].includes(status)) {_return res.status(400).json({ error: 'Invalid status'});
    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(200).json({_dispute});
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}