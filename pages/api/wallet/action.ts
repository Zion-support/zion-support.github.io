import type { NextApiRequest, NextApiResponse } from "next",
import { handleAction } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" }),  try {
    const tx = handleAction(userId, action, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _action, _metadata} = req.body || {};
  if (!userId || !action) return res.status(400).json({_error: "userId and action required"});
  try {_const _tx = handleAction(userId, _action, _metadata);
    return res.status(200).json({ tx});
  } catch (err: unknown) {_return res.status(400).json({ error: err.message});
  }
}