
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;
  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
<<<<<<< HEAD
  if (req.method === "POST") {
    try {
      ensureAdmin(user);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    const { resolutionSummary, status } = req.body |{}
=======

  if (req && req.method === "POST") {
    try {
      ensureAdmin(user);
    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ $2 });
    const { resolutionSummary, status } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const now = new Date().toISOString();
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {
      return res && res.status(400).json({ error: "Invalid status" });
    }
<<<<<<< HEAD
    ((dispute.status = status |"Resolved")
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));
    dispute.resolutionSummary = resolutionSummary |dispute.resolutionSummary;
    dispute.updatedAt = now;
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    try {
      ensureAdmin(user)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();

    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' })
    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(200).json({ dispute })
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    ((dispute && dispute.status = status || "Resolved"),
      (dispute && dispute.resolvedAt = dispute && dispute.status === "Resolved" ? now : undefined));
    dispute && dispute.resolutionSummary = resolutionSummary || dispute && dispute.resolutionSummary;
    dispute && dispute.updatedAt = now;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    await upsertDispute(dispute);
    return res && res.status(200).json({ dispute });
  }
<<<<<<< HEAD
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
=======

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
