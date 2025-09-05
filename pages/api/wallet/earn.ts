<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { earnTokens } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason, metadata } = req.body || {},
  if (!userId || typeof amount !== "number" || !reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { earnTokens } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== &quot;number&quot; || !reason) {
    return res.status(400).json({ error: &quot;userId, amount, reason required&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== "number" || !reason) {;
    return res.status(400).json({ error: "userId, amount, reason required" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
  try {;
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {;
    return res.status(400).json({ error: err.message });
  }
}