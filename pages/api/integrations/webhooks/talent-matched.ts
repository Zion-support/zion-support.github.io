<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { talentId, jobId, matchScore, timestamp } = req.body || {};
    
    // Log the webhook event
    writeState((state) => {
      state.events.push({
        id: `talent-matched-${Date.now()}`,
        timestamp: Date.now(),
        type: 'talent-matched',
        data: { talentId, jobId, matchScore, timestamp }
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing talent-matched webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}