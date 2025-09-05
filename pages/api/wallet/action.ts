import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { handleAction } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, action, metadata } = req.body || {};
  if (!userId || !action) return res.status(400).json({ error: &quot;userId and action required&quot; });
  try {
    const tx = handleAction(userId, action, metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}