<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { handleAction } from '../../../utils/token/service';

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, action, metadata } = req.body || {};
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" });
  try {
    const tx = handleAction(userId, action, metadata);
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, action, metadata } = req.body || {};
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" });
  try {
    const tx = handleAction(userId, action, metadata);
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
