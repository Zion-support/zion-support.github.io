<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { getAllTransactions } from "../../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  const txs = getAllTransactions(),
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs,
  res.status(200).json({ transactions: filtered })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getAllTransactions } from &quot;../../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === &quot;string&quot; ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { getAllTransactions } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { userId } = req.query,;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}