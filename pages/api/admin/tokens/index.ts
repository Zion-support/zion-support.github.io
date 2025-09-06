<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllTransactions } from '../../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered =
    typeof userId === 'string' ? txs.filter(t => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
