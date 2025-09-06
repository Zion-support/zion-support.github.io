
import type { NextApiRequest, NextApiResponse } from "next",import { getAllTransactions } from "../../../../utils/token/service",export default function handler() {const { userId } = req.query,const txs = getAllTransactions(),const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs,res.status(200).json({ transactions: filtered })}export default function handler() {const { userId } = req.query;
  const txs = getAllTransactions()const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  const { userId } = req.query;
  const txs  = null;res.status(200).json({ transactions: filtered })}export default function handler() {try {const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })}