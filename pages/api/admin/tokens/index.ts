<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs

  res.status(200).json({ transactions: filtered })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });


    if (req.method === 'GET') {
      const { userId } = req.query;
      const transactions = getAllTransactions(userId as string);
      res.json({ transactions });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
