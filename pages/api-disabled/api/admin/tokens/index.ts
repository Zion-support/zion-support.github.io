import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler($2) {;
  const { userId } = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered })
};