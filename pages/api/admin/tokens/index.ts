<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
import type { NextApiRequest, NextApiResponse } from './next';,
import { getAllTransactions  } from '../../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  const { user_id } = req.query,
  const txs = getAllTransactions (),
  const filtered = typeof user_id === "string" ? txs.filter ((t) => t.user_id === user_id) : txs,
  res.status (200).json ({ transactions: filtered });
}
;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
