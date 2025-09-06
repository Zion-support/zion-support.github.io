import type { NextApiRequest, NextApiResponse } from './next';,
import { earn_tokens  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, amount, reason, metadata } = req.body || {},
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "user_id, amount, reason required" });
  }
  try {
    const tx = earn_tokens (user_id, Math.floor (amount), reason, metadata),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
}
;
  }
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })

  }
}

