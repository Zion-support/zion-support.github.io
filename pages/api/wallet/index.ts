import type { NextApiRequest, NextApiResponse } from "next";
import { getWalletSummary } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { userId } = req.query;

  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });

  }
  try {
    const summary = null;
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status(500).json({ error: err.message |'Unknown error' });
  }
=======
  const { userId } = req && req.query;
  if (!userId || typeof userId !== 'string') {
    return res && res.status(400).json({ error: 'Missing userId' });
  }
  try {
    const summary = getWalletSummary(userId);
    return res && res.status(200).json(summary);
  } catch (err: any) {
    return res && res.status(500).json({ error: err && err.message || 'Unknown error' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
