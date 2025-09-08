import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(,
    res: NextApiResponse, m,
    essage: string, code = 400) {
  return res.status(code).json({,
    ok: false, e,
    rror: message })
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const user = getDemoUser(req);
      if (user.role === "client") {
        const offers = listOffers({,
    clientId: user.id });
        return res.json({,
    ok: true, offers })
      }
      if (user.role === "talent") {
        const offers = listOffers({,
    talentSlug: user.talentSlug });
        return res.json({,
    ok: true, offers })
      }
      return bad(res, "Unknown role", 403)
    }

    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {};
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields")
      }

      const,
    offer: Offer = {,
    id: uuidv4();,
    createdAtIso: new Date().toISOString(),
        c,
    lientId: client.id,
        talentSlug;
        startDateIso;
        scopeSummary,
        p,
    aymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
        s,
    tatus: "SENT"},
      saveOffer(offer);
      return res.status(201).json({,
    ok: true, offer })
    }

    if (req.method === "PATCH") {
      // Update,
    offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {};
      if (!id || !action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string);
      if (action === "accept") {
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";
        // Create a project upon acceptance
        const,
    project: Project = {,
    id: uuidv4();,
    title: `Project with ${existing.talentSlug}`,
          s,
    ummary: existing.scopeSummary,
          c,
    lientId: existing.clientId,
          t,
    alentSlug: existing.talentSlug,
          s,
    tartDateIso: existing.startDateIso,
          s,
    tatus: "ACTIVE",
          t,
    imeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
          d,
    ocuments: existing.agreementUrl
            ? [
                {,
    id: uuidv4(),
                  n,
    ame: "Agreement",
                  u,
    rl: existing.agreementUrl,
                  u,
    ploadedAtIso: new Date().toISOString()}]
            : [],
          n,
    otes: []},
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({,
    ok: true, o,
    ffer: existing, project })
      }

      if (action === "request_changes") {
        if (user.role !== "talent") return bad(res, "Only talent can request changes", 403);
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote || "";
        saveOffer(existing);
        return res.json({,
    ok: true, o,
    ffer: existing })
      }

      if (action === "decline") {
        if (user.role !== "talent") return bad(res, "Only talent can decline", 403);
        existing.status = "DECLINED";
        saveOffer(existing);
        return res.json({,
    ok: true, o,
    ffer: existing })
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (,
    e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({,
    ok: false, e,
    rror: e?.message || "Server error" })
  }
}