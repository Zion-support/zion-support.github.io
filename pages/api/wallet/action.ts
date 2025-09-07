import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" });
  try {
    const tx = null;
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, action, metadata } = req.body |{}
  if (!userId |!action) return res.status(400).json({ error: "userId and action required" })
  try {
    const tx = handleAction(userId, action, metadata)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}