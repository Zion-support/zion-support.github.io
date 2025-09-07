import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from "../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid dispute ID' });
  }
  
  try {
    const user = parseUserFromRequest(req);
    const dispute = await getDisputeById(id);
    
    if (!dispute) {
      return res.status(404).json({ error: 'Dispute not found' });
    }
    
    // Check if user is involved or admin
    const isInvolved = ensureInvolvedOrAdmin(user, dispute);
    if (!isInvolved) {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    res.status(200).json({ dispute });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}