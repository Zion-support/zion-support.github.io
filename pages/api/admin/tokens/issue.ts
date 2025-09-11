
import type { NextApiRequest, NextApiResponse } from "next",;
import { issueTokens } from "../../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const tx = issue_tokens (user_id, Math.floor (amount), reason || "admin_issue"),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  };
};
import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";

=======export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason } = req.body |{}
  if (!userId |typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason |"admin_issue")
    return res.status(200).json({ tx })

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { userId, amount, reason } = req.body;
    if (!userId || !amount) return res.status(400).json({ error: "UserId and amount required" });

    const result = issueTokens(userId, amount, reason);
    res.json({ success: true, transaction: result });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
==============


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
