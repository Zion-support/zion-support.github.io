import type { NextApiRequest, NextApiResponse } from 'next';
import { getWalletSummary } from '../../../utils/token/service';

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getWalletSummary } from "../../../utils/token/service";
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });
  }
  try {
    const summary = getWalletSummary(userId);
    return res.status(200).json(summary);
  } catch (err: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
=======
    return res.status(500).json({ error: err.message || "Unknown error" })
  }
import type { NextApiRequest, NextApiResponse } from "next";
import { getWalletSummary } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
  }
  try {
    const summary = getWalletSummary(userId);
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Unknown error" })
  }
}
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
