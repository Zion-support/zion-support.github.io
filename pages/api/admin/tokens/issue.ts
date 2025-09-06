<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { issueTokens } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue"),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  };
};
import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason } = req.body |{}
  if (!userId |typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { issueTokens } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue"),
    return res.status(200).json({ tx })
<<<<<<< HEAD
;
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
