import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from &quot;../../../utils/marketplace/auth&quot;;
import { getOfferById, listOffers, saveOffer, saveProject } from &quot;../../../utils/marketplace/store&quot;;
import { Offer, PaymentTerms, Project } from &quot;../../../utils/marketplace/types&quot;;

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
    }

    if (req.method === &quot;POST&quot;) {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {};

      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, &quot;Missing required fields&quot;);
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
        status: &quot;SENT&quot;};

      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }

    if (req.method === &quot;PATCH&quot;) {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {};
      if (!id || !action) return bad(res, &quot;Missing id or action&quot;);
      const existing = getOfferById(id);
      if (!existing) return bad(res, &quot;Offer not found&quot;, 404);
      const user = assertTalentOrClientForOffer(req, existing, req.headers[&quot;x-demo-talent-slug&quot;] as string);

      if (action === &quot;accept&quot;) {
        if (user.role !== &quot;talent&quot;) return bad(res, &quot;Only talent can accept&quot;, 403);
        existing.status = &quot;CONFIRMED&quot;;
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
          notes: []};
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project });
      }

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
  }
}