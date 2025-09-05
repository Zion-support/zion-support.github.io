import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getConfig } from &quot;../../../../utils/token/service&quot;;
import { tokenStore } from &quot;../../../../utils/token/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === &quot;GET&quot;) {
    return res.status(200).json(getConfig());
  }
  if (req.method === &quot;POST&quot;) {
    const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: &quot;Method not allowed&quot; });
}