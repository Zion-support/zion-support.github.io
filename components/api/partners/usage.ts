import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
