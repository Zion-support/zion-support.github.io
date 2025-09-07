import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Invalid request" });
  const { userId, amount, reason } = req.body || {}
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "Invalid request" });
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke");
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
