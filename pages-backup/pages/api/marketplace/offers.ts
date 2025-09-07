<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message})
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const user = getDemoUser({ error: "Invalid request" });
      if (user.role === "client") {
        const offers = listOffers({ error: "Invalid request" });
        return res.json({ ok: true, offers })
      }
      if (user.role === "talent") {
        const offers = listOffers({ error: "Invalid request" });
        return res.json({ ok: true, offers })
      }
      return bad(res, "Unknown role", 403)
    }

    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient({ error: "Invalid request" });
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {}
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields")
      }

      const offer: Offer = {
        id: uuidv4({ error: "Invalid request" });
        createdAtIso: new Date().toISOString({ error: "Invalid request" });
        clientId: client.id
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms: paymentTerms as PaymentTerms
        agreementUrl
        status: "SENT"}
      saveOffer({ error: "Invalid request" });
      return res.status(201).json({ ok: true, offer })
    }

    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {}
      if (!id || !action) return bad({ error: "Invalid request" });
      const existing = getOfferById({ error: "Invalid request" });
      if (!existing) return bad({ error: "Invalid request" });
      const user = assertTalentOrClientForOffer({ error: "Invalid request" });
      if (action === "accept") {
        if (user.role !== "talent") return bad({ error: "Invalid request" });
        existing.status = { error: "Invalid request" };
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4({ error: "Invalid request" });
          title: `Project with ${existing.talentSlug}`
          summary: existing.scopeSummary
          clientId: existing.clientId
          talentSlug: existing.talentSlug
          startDateIso: existing.startDateIso
          status: "ACTIVE"
          timeline: existing.paymentTerms.type = { error: "Invalid request" };
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4({ error: "Invalid request" });
                  name: "Agreement"
                  url: existing.agreementUrl
                  uploadedAtIso: new Date().toISOString()}]
            : []
          notes: []}
        saveProject({ error: "Invalid request" });
        existing.projectId = { error: "Invalid request" };
        saveOffer({ error: "Invalid request" });
        return res.json({ ok: true, offer: existing, project })
      }

      if (action === "request_changes") {
        if (user.role !== "talent") return bad({ error: "Invalid request" });
        existing.status = { error: "Invalid request" };
        existing.changeRequestNote = { error: "Invalid request" };
        saveOffer({ error: "Invalid request" });
        return res.json({ ok: true, offer: existing})
      }

      if (action === "decline") {
        if (user.role !== "talent") return bad({ error: "Invalid request" });
        existing.status = { error: "Invalid request" };
        saveOffer({ error: "Invalid request" });
        return res.json({ ok: true, offer: existing})
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = { error: "Invalid request" };
    return res.status(status).json({ ok: false, error: e ?.message || "Server error" })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
