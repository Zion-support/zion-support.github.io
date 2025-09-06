<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { getConfig } from "../../../../utils/token/service",
import { tokenStore } from "../../../../utils/token/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { getConfig } from "../../../../utils/token/service",;
import { tokenStore } from "../../../../utils/token/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method === "GET") {;
    return res.status(200).json(getConfig());
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
  if (req.method === "POST") {;
    const body = req.body || {},;
    const current = tokenStore.getConfig(),;
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
    return res.status(200).json(updated);
  }
<<<<<<< HEAD
  return res.status(405).json({ error: "Method not allowed" })
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  return res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}