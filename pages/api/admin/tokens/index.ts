import type { NextApiRequest, NextApiResponse } from "next",
import { getAllTransactions } from "../../../../utils/token/service"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs
  res.status(200).json({ transactions: filtered })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;
  const _txs = getAllTransactions();
  const _filtered = typeof userId === "string" ? txs.filter(_(t) => t.userId === userId) : txs;
  res.status(200).json({_transactions: filtered});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}