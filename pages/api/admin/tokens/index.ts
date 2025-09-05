import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;
  const _txs = getAllTransactions();
  const _filtered = typeof userId === "string" ? txs.filter(_(t) => t.userId === userId) : txs;
  res.status(200).json({_transactions: filtered});
}