<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { getWalletSummary } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getWalletSummary } from &quot;../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== &quot;string&quot;) {
    return res.status(400).json({ error: &quot;Missing userId&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  try {
    const summary = getWalletSummary(userId),
    return res.status(200).json(summary)
  } catch (err: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: err.message || "Unknown error" })
=======
    return res.status(500).json({ error: err.message || &quot;Unknown error&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;
  if (!userId || typeof userId !== "string") {_return res.status(400).json({ error: "Missing userId"});
  }
  try {_const _summary = getWalletSummary(userId);
    return res.status(200).json(summary);} catch (err: unknown) {_return res.status(500).json({ error: err.message || "Unknown error"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}