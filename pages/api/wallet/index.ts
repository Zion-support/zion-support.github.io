

import type { NextApiRequest, NextApiResponse } from 'next';
import {getWalletSummary} from '../../../utils/token/service';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { userId } = req.query;

  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });

    return res.status(500).json({ error: err.message |'Unknown error' });
  }
import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status(500).json({ error: err.message || 'Unknown error' });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"
import { getWalletSummary } from "../../../utils/token/service"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
  }
  try {
    const summary = getWalletSummary($2);
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Unknown error" })
  }

}

