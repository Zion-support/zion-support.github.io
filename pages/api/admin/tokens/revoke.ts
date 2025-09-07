import type { NextApiRequest, NextApiResponse } from 'next';
import { revokeTokens } from '../../../../utils/tokenService';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: 'Method not allowed' });
  
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: 'Invalid parameters' });
  
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke");
    return res.status(200).json({ tx });
  } catch (error) {
    console.error('Error revoking tokens:', error);
    return res.status(500).json({ error: 'Failed to revoke tokens' });
  }
}