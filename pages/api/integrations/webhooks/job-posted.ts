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
    const { jobId, title, company, location } = req.body || {};
    
    // Log the webhook event
    writeState((state) => {
      state.events.push({
        id: `job-posted-${Date.now()}`,
        timestamp: Date.now(),
        type: 'job-posted',
        data: { jobId, title, company, location }
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing job-posted webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
