
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '[^']*';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = null;
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })

  }

  try {
    const proposals = await listProposals();
    return res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to list proposals" });
  }
}
