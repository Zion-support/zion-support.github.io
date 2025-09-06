import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { userId } = req.query;
  const txs = null;
=======
  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ transactions: filtered })
}