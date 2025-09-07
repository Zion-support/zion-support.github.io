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
    const { resumeId, viewerId, timestamp } = req.body || {};
    
    // Log the webhook event
    writeState((state) => {
      state.events.push({
        id: `resume-viewed-${Date.now()}`,
        timestamp: Date.now(),
        type: 'resume-viewed',
        data: { resumeId, viewerId, timestamp }
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing resume-viewed webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}