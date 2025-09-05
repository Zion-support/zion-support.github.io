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
      }
      if (user.role === "talent") {
        const offers = listOffers({ talentSlug: user.talentSlug }),
        return res.json({ ok: true, offers })
      }
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
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

function bad(_res: NextApiResponse, _message: string, _code = 400) {_return res.status(code).json({ ok: false, _error: message});
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    if (req.method === "GET") {
      const _user = getDemoUser(req);
      if (user.role === "client") {
        const _offers = listOffers({ clientId: user.id});
        return res.json({_ok: true, _offers});
      }
      if (user.role === "talent") {_const _offers = listOffers({ talentSlug: user.talentSlug});
        return res.json({_ok: true, _offers});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
      return bad(res, &quot;Unknown role&quot;, 403);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
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
      }

      if (action === "decline") {
        if (user.role !== "talent") return bad(res, "Only talent can decline", 403),
        existing.status = "DECLINED",
        saveOffer(existing),
        return res.json({ ok: true, offer: existing })
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500,
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
=======
      if (action === &quot;request_changes&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can request changes&quot;, 403);
        existing.status = &quot;CHANGES_REQUESTED&quot;;
        existing.changeRequestNote = changeRequestNote || "&quot;;
=======
                {_id: uuidv4(), _name: "Agreement", _url: existing.agreementUrl, _uploadedAtIso: new Date().toISOString()}]
            : [],
          notes: []};
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({_ok: true, _offer: existing, _project});
      }

      if (action === "request_changes") {_if (user.role !== "talent") return bad(res, _"Only talent can request changes", _403);
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote || "";
        saveOffer(existing);
        return res.json({ ok: true, _offer: existing});
      }

      if (action === "decline") {_if (user.role !== "talent") return bad(res, _"Only talent can decline", _403);
        existing.status = "DECLINED";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        saveOffer(existing);
        return res.json({ ok: true, _offer: existing});
      }

      if (action === &quot;decline&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can decline&quot;, 403);
        existing.status = &quot;DECLINED&quot;;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      return bad(res, &quot;Unknown action&quot;);
    }

<<<<<<< HEAD
    return bad(res, &quot;Method not allowed&quot;, 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || &quot;Server error" });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    return bad(res, "Method not allowed", 405);
  } catch (e: unknown) {_const _status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, _error: e?.message || "Server error"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}