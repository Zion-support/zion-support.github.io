<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { earnTokens } from '../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== 'number' || !reason) {
    return res.status(400).json({ error: 'userId, amount, reason required' });
  }
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {
<<<<<<< HEAD
    return res.status(400).json({ error: err.message });
  }
=======
    return res.status(400).json({ error: err.message })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
