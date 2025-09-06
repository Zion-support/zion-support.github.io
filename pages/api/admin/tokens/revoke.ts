
import type { NextApiRequest, NextApiResponse } from 'next';

function revokeTokens(userId: string, amount: number, reason: string) {
  return { id: 'mock-tx', amount, reason };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke");
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

