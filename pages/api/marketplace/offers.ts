import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import {
  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,
} from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: message });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req && req.method === "GET") {
      const user = getDemoUser(req);
      if (user && user.role === "client") {
        const offers = listOffers({ clientId: user && user.id });
        return res && res.json({ ok: true, offers });
      }
      if (user && user.role === "talent") {
        const offers = listOffers({ talentSlug: user && user.talentSlug });
        return res && res.json({ ok: true, offers });
      }
      return bad(res, "Unknown role", 403);
    }

    if (req && req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const {
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms,
        agreementUrl,
      } = req && req.body || {};
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields");
      }

      const offer: Offer = {
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client && client.id,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
        status: "SENT",
      };
      saveOffer(offer);
      return res && res.status(201).json({ ok: true, offer });
    }

    if (req && req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req && req.body || {};
      if (!id || !action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(
        req,
        existing,
        req && req.headers["x-demo-talent-slug"] as string,
      );
      if (action === "accept") {
        if (user && user.role !== "talent")
          return bad(res, "Only talent can accept", 403);
        existing && existing.status = "CONFIRMED";
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4(),
          title: `Project with ${existing && existing.talentSlug}`,
          summary: existing && existing.scopeSummary,
          clientId: existing && existing.clientId,
          talentSlug: existing && existing.talentSlug,
          startDateIso: existing && existing.startDateIso,
          status: "ACTIVE",
          timeline:
            existing && existing.paymentTerms.type === "milestone"
              ? existing && existing.paymentTerms.milestones || []
              : [],
          documents: existing && existing.agreementUrl
            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
                  url: existing && existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString(),
                },
              ]
            : [],
          notes: [],
        };
        saveProject(project);
        existing && existing.projectId = project && project.id;
        saveOffer(existing);
        return res && res.json({ ok: true, offer: existing, project });
      }

      if (action === "request_changes") {
        if (user && user.role !== "talent")
          return bad(res, "Only talent can request changes", 403);
        existing && existing.status = "CHANGES_REQUESTED";
        existing && existing.changeRequestNote = changeRequestNote || "";
        saveOffer(existing);
        return res && res.json({ ok: true, offer: existing });
      }

      if (action === "decline") {
        if (user && user.role !== "talent")
          return bad(res, "Only talent can decline", 403);
        existing && existing.status = "DECLINED";
        saveOffer(existing);
        return res && res.json({ ok: true, offer: existing });
      }

      return bad(res, "Unknown action");
    }

    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message || "Server error" });
  }
}
