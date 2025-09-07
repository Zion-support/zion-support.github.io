import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
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

    const dispute = await getDisputeById(id);
    if (!dispute) {
      return res.status(404).json({ error: 'Dispute not found' });
    }

    // Check if user is involved or admin
    const isInvolved = ensureInvolvedOrAdmin(req, res, dispute);
    if (!isInvolved) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Generate and return dispute data as JSON
    const disputeData = JSON.stringify(dispute, null, 2);
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="dispute-${id}.json"`);
    res.status(200).send(disputeData);
  } catch (error) {
    console.error('Error downloading dispute:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}