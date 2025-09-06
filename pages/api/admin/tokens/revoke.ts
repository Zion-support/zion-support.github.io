import type { NextApiRequest, NextApiResponse } from "next",
import { revokeTokens } from "../../../../utils/token/service"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke"),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount, _reason} = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({_error: "userId and amount required"});
  try {_const _tx = revokeTokens(userId, _Math.floor(amount), _reason || "admin_revoke");
    return res.status(200).json({ tx});
  } catch (err: unknown) {_return res.status(400).json({ error: err.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}