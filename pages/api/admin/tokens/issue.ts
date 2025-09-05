import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { issueTokens } from &quot;../../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== &quot;number&quot;) return res.status(400).json({ error: &quot;userId and amount required&quot; });
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || &quot;admin_issue&quot;);
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}