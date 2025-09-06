import type { NextApiRequest, NextApiResponse } from './next';,
import { redeemToCredits  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, amount } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and amount required" }), ) {
  $2
}
  try {
    const result = redeemToCredits (user_id, Math.floor (amount)),
    return res.status (200).json (result);
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
}
;