<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error:"Method not allowed" }),;
  const { userId, amount } = req.body || {},;
  if (!userId || typeof amount !== "number") return res.status(400).json({ error:"userId and amount required" }),;
  try {;
    const result = redeemToCredits(userId, Math.floor(amount)),;
    return res.status(200).json(result),;
  } catch (err:any) {;
    return res.status(400).json({ error:err.message }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { redeemToCredits } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),  try {
    const result = redeemToCredits(userId, Math.floor(amount)),
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount} = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({_error: "userId and amount required"});
  try {_const _result = redeemToCredits(userId, _Math.floor(amount));
    return res.status(200).json(result);} catch (err: unknown) {_return res.status(400).json({ error: err.message});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}