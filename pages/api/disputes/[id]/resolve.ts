import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    try {
<<<<<<< HEAD
      ensureAdmin(user);
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
=======
      ensureAdmin(user)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();

<<<<<<< HEAD
    if (status && !['Resolved', 'Under Review', 'Open'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
=======
    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
<<<<<<< HEAD
    return res.status(200).json({ dispute });
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
=======
    return res.status(200).json({ dispute })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
