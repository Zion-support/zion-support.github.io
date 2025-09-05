import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getAllTransactions } from &quot;../../../../utils/token/service&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === &quot;string&quot; ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
}