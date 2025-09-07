import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureInvolvedOrAdmin } from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid dispute ID' });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const user = parseUserFromRequest(req);
    const dispute = await getDisputeById(id);
    
    if (!dispute) {
      return res.status(404).json({ error: 'Dispute not found' });
    }
    
    const isInvolved = ensureInvolvedOrAdmin(user, dispute);
    if (!isInvolved) {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    const { resolution, notes } = req.body || {};
    if (!resolution) {
      return res.status(400).json({ error: 'Resolution required' });
    }
    
    dispute.status = 'resolved';
    dispute.resolution = resolution;
    dispute.resolutionNotes = notes;
    dispute.resolvedAt = new Date().toISOString();
    dispute.resolvedBy = user.id;
    
    await upsertDispute(dispute);
    
    res.status(200).json({ dispute });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}