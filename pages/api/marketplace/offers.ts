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
      }
      return bad(res, "Unknown role", 403);
    }

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
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4(), _title: `Project with ${existing.talentSlug}`,
          summary: existing.scopeSummary,
          clientId: existing.clientId,
          talentSlug: existing.talentSlug,
          startDateIso: existing.startDateIso,
          status: "ACTIVE",
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
          documents: existing.agreementUrl
            ? [
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
        saveOffer(existing);
        return res.json({ ok: true, _offer: existing});
      }

      return bad(res, "Unknown action");
    }

    return bad(res, "Method not allowed", 405);
  } catch (e: unknown) {_const _status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, _error: e?.message || "Server error"});
  }
}