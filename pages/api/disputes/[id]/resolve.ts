<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query as { id?: string };
    if (!id) {
      return res.status(400).json({ error: 'Missing dispute ID' });
    }

    const user = parseUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Check if user is admin
    const isAdmin = ensureAdmin(req, res);
    if (!isAdmin) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const { resolution, notes } = req.body || {};
    if (!resolution) {
      return res.status(400).json({ error: 'Missing resolution' });
    }

    const dispute = await getDisputeById(id);
    if (!dispute) {
      return res.status(404).json({ error: 'Dispute not found' });
    }

    // Update dispute with resolution
    const updatedDispute = {
      ...dispute,
      status: 'resolved',
      resolution,
      notes: notes || '',
      resolvedAt: new Date().toISOString(),
      resolvedBy: user.id
    };

    await upsertDispute(updatedDispute);

    res.status(200).json({ success: true, dispute: updatedDispute });
  } catch (error) {
    console.error('Error resolving dispute:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
