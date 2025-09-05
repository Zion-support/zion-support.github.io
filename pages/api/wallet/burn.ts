import type { NextApiRequest, NextApiResponse } from "next",
import { burnTokens, burnForFeature } from "../../../utils/token/service",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" }),
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata),
    return res.status(200).json({ tx })  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount, _reason, _feature, _metadata} = req.body || {};
  if (!userId) return res.status(400).json({_error: "userId required"});
  try {_const _tx = feature
      ? burnForFeature(userId, _feature, _metadata)
      : burnTokens(userId, _Math.floor(amount), _reason || "burn", _metadata);
    return res.status(200).json({ tx});
  } catch (err: unknown) {_return res.status(400).json({ error: err.message});
  }
}