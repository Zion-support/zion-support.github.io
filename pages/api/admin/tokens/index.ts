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