import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { redeemToCredits } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== &quot;number&quot;) return res.status(400).json({ error: &quot;userId and amount required&quot; });
  try {
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}