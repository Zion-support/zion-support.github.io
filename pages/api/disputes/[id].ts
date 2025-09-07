<<<<<<< HEAD
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

    res.status(200).json(dispute);
  } catch (error) {
    console.error('Error fetching dispute:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
