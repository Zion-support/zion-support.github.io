<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { burnTokens, burnForFeature } from '../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount, reason, feature, metadata } = req.body || {};
  if (!userId) return res.status(400).json({ error: 'userId required' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
  const { userId, amount, reason, feature, metadata } = req.body || {};
  if (!userId) return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || 'burn', metadata);
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
