import type { NextApiRequest, NextApiResponse } from './next';,
import { handle_action  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, action, metadata } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and action required" }), ) {
  $2
}
  try {
    const tx = handle_action (user_id, action, metadata),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
}
;