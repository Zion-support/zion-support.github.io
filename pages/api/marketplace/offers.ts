import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid"
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth",
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store",
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types",
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const user = getDemoUser(req)
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id })
        return res.json({ ok: true, offers })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    }

    if (req.method === &quot;POST&quot;) {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req)
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},

      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
      }

      const offer: Offer = {
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client.id,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
        status: "SENT"},
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

      saveOffer(offer),
      return res.status(201).json({ ok: true, offer })
    }

    if (req.method === &quot;PATCH&quot;) {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {},
      if (!id || !action) return bad(res, "Missing id or action"),
      const existing = getOfferById(id)
      if (!existing) return bad(res, "Offer not found", 404),
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string),

      if (action === "accept") {
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403),
        existing.status = "CONFIRMED",
    if (req.method === "POST") {_// Create an offer (client sends an offer to confirm)
      const _client = assertClient(req);
      const { talentSlug, _startDateIso, _scopeSummary, _paymentTerms, _agreementUrl} = req.body || {};

      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {_return bad(res, _"Missing required fields");}

      const offer: Offer = {_id: uuidv4(), _createdAtIso: new Date().toISOString(), _clientId: client.id, _talentSlug, _startDateIso, _scopeSummary, _paymentTerms: paymentTerms as PaymentTerms, _agreementUrl, _status: "SENT"};

      saveOffer(offer);
      return res.status(201).json({_ok: true, _offer});
    }

    if (req.method === "PATCH") {_// Update offer: accept or request changes
      const { id, _action, _changeRequestNote} = req.body || {};
      if (!id || !action) return bad(res, "Missing id or action");
      const _existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const _user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string);

      if (action === "accept") {_if (user.role !== "talent") return bad(res, _"Only talent can accept", _403);
        existing.status = "CONFIRMED";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4(), _title: `Project with ${existing.talentSlug}`,
          summary: existing.scopeSummary,
          clientId: existing.clientId,
          talentSlug: existing.talentSlug,
          startDateIso: existing.startDateIso,
          status: &quot;ACTIVE&quot;,
          timeline: existing.paymentTerms.type === &quot;milestone&quot; ? existing.paymentTerms.milestones || [] : [],
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4(),
                  name: &quot;Agreement&quot;,
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()}]
            : [],
          notes: []},
        saveProject(project),
        existing.projectId = project.id,
        saveOffer(existing),
        return res.json({ ok: true, offer: existing, project })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}