import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({,
    error: 'Invalid id' });
  const user = parseUserFromRequest(req);
  if (req.method === 'POST') {
    try {
      ensureAdmin(user)
    } catch (,
    e: any) {
      return res.status(e.statusCode || 403).json({,
    error: 'Forbidden' })
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({,
    error: 'Not found' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();
    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {
      return res.status(400).json({,
    error: 'Invalid status' })
    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(200).json({ dispute })
  }

  try {
    const { id } = req.query;
    res.status(200).json({ message: 'Resolve endpoint', id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}