<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  }
}

=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { issueTokens } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {
    const tx = issue_tokens (user_id, Math.floor (amount), reason || "admin_issue"),
    return res.status (200).json ({ tx });
  } catch (err: any) {
<<<<<<< HEAD
    return res.status (400).json ({ error: err.message });
  }
}
;
=======
    return res.status(400).json({ error: err.message })
  };
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason } = req.body |{}
  if (!userId |typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason |"admin_issue")
    return res.status(200).json({ tx })

  } catch (err: any) {
    return res.status(400).json({ error: err.message });
=======
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { userId, amount, reason } = req.body;
    if (!userId || !amount) return res.status(400).json({ error: "UserId and amount required" });

    const result = issueTokens(userId, amount, reason);
    res.json({ success: true, transaction: result });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
