import type { NextApiRequest, NextApiResponse } from "next";
import { revokeTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason } = req.body |{}
  if (!userId |typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason |"admin_revoke")
    return res.status(200).json({ tx })

  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}