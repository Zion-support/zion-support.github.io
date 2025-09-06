<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { redeemToCredits } from '../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== 'number')
    return res.status(400).json({ error: 'userId and amount required' });
  try {
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
