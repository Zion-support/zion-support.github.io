import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { authenticateRequest, calculateUsageSummary } from &quot;../../../utils/api/partnerAuth&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;GET&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;GET&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: &quot;Unauthorized&quot; });
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
}