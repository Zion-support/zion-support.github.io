<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { getAllTransactions } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs
  res.status(200).json({ transactions: filtered })
<<<<<<< HEAD
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
