import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { burnTokens, burnForFeature } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount, reason, feature, metadata } = req.body || {};
  if (!userId) return res.status(400).json({ error: &quot;userId required&quot; });
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || &quot;burn&quot;, metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}