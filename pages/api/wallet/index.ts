import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getWalletSummary } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== &quot;string&quot;) {
    return res.status(400).json({ error: &quot;Missing userId&quot; });
  }
  try {
    const summary = getWalletSummary(userId);
    return res.status(200).json(summary);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || &quot;Unknown error&quot; });
  }
}