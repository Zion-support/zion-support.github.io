<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { issueTokens } from "../../../../utils/token/service",;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason } = req.body || {}
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue")
    return res.status(200).json({ tx })
<<<<<<< HEAD
;
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  
  try {
    const tx = await issueTokens(userId, amount, reason);
    return res.status(200).json({ tx });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
