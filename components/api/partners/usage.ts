<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest,
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id);
<<<<<<< HEAD
  return res.status(200).json({ summary });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(200).json({ summary })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
