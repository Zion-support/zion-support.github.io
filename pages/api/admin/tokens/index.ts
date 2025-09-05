<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { getAllTransactions } from "../../../../utils/token/service",;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { userId } = req.query,;
  const txs = getAllTransactions(),;
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) :txs,;
  res.status(200).json({ transactions:filtered }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { getAllTransactions } from "../../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  const txs = getAllTransactions(),
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs,
  res.status(200).json({ transactions: filtered })import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {const { userId} = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter(_(t) => t.userId === userId) : txs;
  res.status(200).json({transactions: filtered})
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}