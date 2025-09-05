<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth",
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store",
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from &quot;../../../utils/marketplace/auth&quot;;
import { getOfferById, listOffers, saveOffer, saveProject } from &quot;../../../utils/marketplace/store&quot;;
import { Offer, PaymentTerms, Project } from &quot;../../../utils/marketplace/types&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    if (req.method === "GET") {
      const user = getDemoUser(req),
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id }),
        return res.json({ ok: true, offers })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { v4 as uuidv4 } from "uuid",;
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth",;
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store",;
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types",;
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({ ok: false, error: message });
}
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;
    if (req.method === "GET") {;
      const user = getDemoUser(req),;
      if (user.role === "client") {;
        const offers = listOffers({ clientId: user.id }),;
        return res.json({ ok: true, offers });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
      if (user.role === "talent") {;
        const offers = listOffers({ talentSlug: user.talentSlug }),;
        return res.json({ ok: true, offers });
      }
<<<<<<< HEAD
      return bad(res, "Unknown role", 403)
=======
    if (req.method === &quot;GET&quot;) {
      const user = getDemoUser(req);
      if (user.role === &quot;client&quot;) {
        const offers = listOffers({ clientId: user.id });
        return res.json({ ok: true, offers });
      }
      if (user.role === &quot;talent&quot;) {
        const offers = listOffers({ talentSlug: user.talentSlug });
        return res.json({ ok: true, offers });
      }
      return bad(res, &quot;Unknown role&quot;, 403);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    if (req.method === &quot;POST&quot;) {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req),
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},

      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
<<<<<<< HEAD
        return bad(res, "Missing required fields")
=======
        return bad(res, &quot;Missing required fields&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
        status: "SENT"},
=======
        status: &quot;SENT&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      saveOffer(offer),
      return res.status(201).json({ ok: true, offer })
    }

    if (req.method === &quot;PATCH&quot;) {
      // Update offer: accept or request changes
<<<<<<< HEAD
      const { id, action, changeRequestNote } = req.body || {},
      if (!id || !action) return bad(res, "Missing id or action"),
      const existing = getOfferById(id),
      if (!existing) return bad(res, "Offer not found", 404),
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string),

      if (action === "accept") {
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403),
        existing.status = "CONFIRMED",
=======
      const { id, action, changeRequestNote } = req.body || {};
      if (!id || !action) return bad(res, &quot;Missing id or action&quot;);
      const existing = getOfferById(id);
      if (!existing) return bad(res, &quot;Offer not found&quot;, 404);
      const user = assertTalentOrClientForOffer(req, existing, req.headers[&quot;x-demo-talent-slug&quot;] as string);

      if (action === &quot;accept&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can accept&quot;, 403);
        existing.status = &quot;CONFIRMED&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4(),
          title: `Project with ${existing.talentSlug}`,
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
      }

<<<<<<< HEAD
      if (action === "request_changes") {
        if (user.role !== "talent") return bad(res, "Only talent can request changes", 403),
        existing.status = "CHANGES_REQUESTED",
        existing.changeRequestNote = changeRequestNote || "",
        saveOffer(existing),
        return res.json({ ok: true, offer: existing })
=======
      return bad(res, "Unknown role", 403);
    }
;
    if (req.method === "POST") {;
      // Create an offer (client sends an offer to confirm);
      const client = assertClient(req),;
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},;
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {;
        return bad(res, "Missing required fields");
      }
;
      const offer: Offer = {;
        id: uuidv4(),;
        createdAtIso: new Date().toISOString(),;
        clientId: client.id,;
        talentSlug,;
        startDateIso,;
        scopeSummary,;
        paymentTerms: paymentTerms as PaymentTerms,;
        agreementUrl,;
        status: "SENT"},;
      saveOffer(offer),;
      return res.status(201).json({ ok: true, offer });
    }
;
    if (req.method === "PATCH") {;
      // Update offer: accept or request changes;
      const { id, action, changeRequestNote } = req.body || {},;
      if (!id || !action) return bad(res, "Missing id or action"),;
      const existing = getOfferById(id),;
      if (!existing) return bad(res, "Offer not found", 404),;
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string),;
      if (action === "accept") {;
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403),;
        existing.status = "CONFIRMED",;
        // Create a project upon acceptance;
        const project: Project = {;
          id: uuidv4(),;
          title: `Project with ${existing.talentSlug}`,;
          summary: existing.scopeSummary,;
          clientId: existing.clientId,;
          talentSlug: existing.talentSlug,;
          startDateIso: existing.startDateIso,;
          status: "ACTIVE",;
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],;
          documents: existing.agreementUrl;
            ? [;
                {;
                  id: uuidv4(),;
                  name: "Agreement",;
                  url: existing.agreementUrl,;
                  uploadedAtIso: new Date().toISOString()}];
            : [],;
          notes: []},;
        saveProject(project),;
        existing.projectId = project.id,;
        saveOffer(existing),;
        return res.json({ ok: true, offer: existing, project });
      }
;
      if (action === "request_changes") {;
        if (user.role !== "talent") return bad(res, "Only talent can request changes", 403),;
        existing.status = "CHANGES_REQUESTED",;
        existing.changeRequestNote = changeRequestNote || "",;
        saveOffer(existing),;
        return res.json({ ok: true, offer: existing });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      if (action === "decline") {;
        if (user.role !== "talent") return bad(res, "Only talent can decline", 403),;
        existing.status = "DECLINED",;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }
;
      return bad(res, "Unknown action");
    }
<<<<<<< HEAD

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500,
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
=======
      if (action === &quot;request_changes&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can request changes&quot;, 403);
        existing.status = &quot;CHANGES_REQUESTED&quot;;
        existing.changeRequestNote = changeRequestNote || "&quot;;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      if (action === &quot;decline&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can decline&quot;, 403);
        existing.status = &quot;DECLINED&quot;;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      return bad(res, &quot;Unknown action&quot;);
    }

    return bad(res, &quot;Method not allowed&quot;, 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || &quot;Server error" });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {;
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}