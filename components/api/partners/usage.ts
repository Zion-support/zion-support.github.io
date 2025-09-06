import type { NextApiRequest, NextApiResponse } from "next",
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth",

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET"),
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req)
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id)
  return res.status(200).json({ summary })
  }
  const auth = await authenticateRequest(req)
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id)
  return res.status(200).json({ summary })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") {
    res.setHeader("Allow", _"GET");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const _auth = await authenticateRequest(req);
  if (!auth) {_return res.status(401).json({ error: "Unauthorized"});
  }
  const _summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({_summary});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}