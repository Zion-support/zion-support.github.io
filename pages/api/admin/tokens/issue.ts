import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";




  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}
import type { NextApiRequest, NextApiResponse } from './next';,
import { issue_tokens  } from '../../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, amount, reason } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and amount required" }), ) {
  $2
}
  try {
    const tx = issue_tokens (user_id, Math.floor (amount), reason || "admin_issue"),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
;
