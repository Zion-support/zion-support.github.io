
import type { NextApiRequest, NextApiResponse } from "next",;
import { getAllTransactions } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  const txs = getAllTransactions(),
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs,
  res.status(200).json({ transactions: filtered });
};
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs

  res.status(200).json({ transactions: filtered })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
