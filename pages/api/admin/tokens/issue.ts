
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: 'Invalid parameters' });
  try {
    // Placeholder for token issuance
    const tx = { id: 'tx_' + Date.now(), userId, amount, reason: reason || "admin_issue" };
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

