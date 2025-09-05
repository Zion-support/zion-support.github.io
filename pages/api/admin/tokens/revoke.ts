<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { revokeTokens } from "../../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke"),
    return res.status(200).json({ tx })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { revokeTokens } from &quot;../../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== &quot;number&quot;) return res.status(400).json({ error: &quot;userId and amount required&quot; });
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || &quot;admin_revoke&quot;);
    return res.status(200).json({ tx });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}