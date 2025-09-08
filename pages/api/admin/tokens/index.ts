import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({,
    transactions: filtered });
}