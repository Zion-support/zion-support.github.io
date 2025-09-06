<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { redeemToCredits } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { redeemToCredits } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== &quot;number&quot;) return res.status(400).json({ error: &quot;userId and amount required&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  try {
    const result = redeemToCredits(userId, Math.floor(amount)),
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;
  const { userId, amount } = req.body || {},;
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {;
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
  } catch (err: any) {;
    return res.status(400).json({ error: err.message });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}