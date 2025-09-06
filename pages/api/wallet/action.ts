<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { handleAction } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" }),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { handleAction } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, action, metadata } = req.body || {};
  if (!userId || !action) return res.status(400).json({ error: &quot;userId and action required&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  try {
    const tx = handleAction(userId, action, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { handleAction } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;
  const { userId, action, metadata } = req.body || {},;
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" });
  try {;
    const tx = handleAction(userId, action, metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {;
    return res.status(400).json({ error: err.message });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}