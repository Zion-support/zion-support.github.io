<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { redeemToCredits } from '../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== 'number')
    return res.status(400).json({ error: 'userId and amount required' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
  } catch (err: any) {
<<<<<<< HEAD
    return res.status(400).json({ error: err.message });
  }
=======
    return res.status(400).json({ error: err.message })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
