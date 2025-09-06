<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs

  res.status(200).json({ transactions: filtered })
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
