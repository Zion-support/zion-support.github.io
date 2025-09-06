<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllTransactions } from '../../../../utils/token/service';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
<<<<<<< HEAD
  const filtered =
    typeof userId === 'string' ? txs.filter(t => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
}
=======
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
