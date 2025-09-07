import type { NextApiRequest, NextApiResponse } from 'next';
import { issueTokens } from '../../../../utils/tokenService';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: 'Method not allowed' });
  
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: 'Invalid parameters' });
  
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue");
    return res.status(200).json({ tx });
  } catch (error) {
    console.error('Error issuing tokens:', error);
    return res.status(500).json({ error: 'Failed to issue tokens' });
  }
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
