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
    const { talentId, companyId, position, hireDate } = req.body || {};
    
    // Log the webhook event
    writeState((state) => {
      state.events.push({
        id: `talent-hired-${Date.now()}`,
        timestamp: Date.now(),
        type: 'talent-hired',
        data: { talentId, companyId, position, hireDate }
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing talent-hired webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}