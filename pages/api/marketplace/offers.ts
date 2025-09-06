


<<<<<<< HEAD

=======
import {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  assertClient
  assertTalentOrClientForOffer
  getDemoUser
} from "../../../utils/marketplace/auth";
import {
  getOfferById
  listOffers
  saveOffer
  saveProject
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,;
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
} from "../../../utils/marketplace/store";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })

}
export default /**
 * handler - Function description
 */
function handler() {
  try {

    // Check condition
if ( {) {
  $2
}
      const user = getDemoUser (req);
      // Check condition
if ( {) {
  $2
}
        const offers = list_offers ({ client_id: user.id });
        return res.json ({ ok: true, offers });

      }
      // Check condition
if ( {) {
  $2
}
        const offers = list_offers ({ talent_slug: user.talent_slug });
        return res.json ({ ok: true, offers });

      }
      return bad(res, "Unknown role", 403);
    }
    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const {
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms
        agreementUrl
      } = req.body |{}
      if (!talentSlug |!startDateIso |!scopeSummary |!paymentTerms) {
        return bad(res, "Missing required fields");
      }
      const offer: Offer = {
        id: uuidv4()
        createdAtIso: new Date().toISOString()
        clientId: client.id
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms: paymentTerms as PaymentTerms
        agreementUrl
        status: "SENT"
      }
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }
    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body |{}
      if (!id |!action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(
        req
        existing
        req.headers["x-demo-talent-slug"] as string
      );
      if (action === "accept") {
        if (user.role !== "talent")
          return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4()
          title: `Project with ${existing.talentSlug}`
          summary: existing.scopeSummary
          clientId: existing.clientId
          talentSlug: existing.talentSlug
          startDateIso: existing.startDateIso
          status: "ACTIVE"
          timeline:
            existing.paymentTerms.type === "milestone"
              ? existing.paymentTerms.milestones |[]
              : []
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4()
                  name: "Agreement"
                  url: existing.agreementUrl
                  uploadedAtIso: new Date().toISOString()
                }
              ]
            : []
          notes: []
        }
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project });
      }
      if (action === "request_changes") {
        if (user.role !== "talent")
          return bad(res, "Only talent can request changes", 403);
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote |"";
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }
      if (action === "decline") {
        if (user.role !== "talent")
          return bad(res, "Only talent can decline", 403);
        existing.status = "DECLINED";
        return res.json({ ok: true, offers });
      }
      if (user.role === "talent") {
    if (req.method === "GET") {;
      const user = getDemoUser(req);
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id });
        return res.json({ ok: true, offers });
      }
      if (user.role === "talent") {
        const offers = listOffers({ talentSlug: user.talentSlug });
        return res.json({ ok: true, offers });
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


    if (req.method === 'GET') {
      res.status(200).json({ offers: [] });
    } else if (req.method === 'POST') {
      const offer = {
        id: 'offer-id',
        createdAtIso: new Date().toISOString(),
        clientId: 'client-id',
        talentSlug: 'talent-slug',
        startDateIso: new Date().toISOString(),
        scopeSummary: 'Project scope',
        paymentTerms: { type: 'fixed', amount: 1000 },
        agreementUrl: 'agreement-url'
      };
      res.status(201).json({
        ok: true,
        offer
      });
    } else if (req.method === 'PATCH') {
      const existing = {
        id: 'existing-offer',
        status: 'ACTIVE'
      };
      return res.json({
        ok: true,
        offer: existing
      });
    } else {
      return bad(res, "Unknown role", 403);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    return bad(res, "Internal server error", 500);
    if (req.method === "GET") {
      const user = getDemoUser(req),
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id }),
        return res.json({ ok: true, offers })
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      if (user.role === "talent") {;
        const offers = listOffers({ talentSlug: user.talentSlug });
        return res.json({ ok: true, offers });
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

        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
        status: "SENT"
        status: "SENT",
      };
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }

        startDateIso,
        scope_summary,
        payment_terms: payment_terms as PaymentTerms,
        agreement_url,
        status: "SENT",

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";

<<<<<<< HEAD
=======

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


          id: uuidv4(),
          title: `Project with ${existing && existing.talentSlug}`,
          summary: existing && existing.scopeSummary,
          clientId: existing && existing.clientId,
          talentSlug: existing && existing.talentSlug,
          startDateIso: existing && existing.startDateIso,
          status: "ACTIVE",



          documents: existing.agreementUrl

            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
                  url: existing && existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString(),
                },
              ]

            : []
          notes: []
        }
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
      }
      save_offer (offer);
      return res.status (201).json ({ ok: true, offer });
    }
    // Check condition
if ( {) {
  $2
}
      // Update offer: accept or request changes;
      const { id, action, changeRequestNote } = req.body || {}
      if (return bad (res, "Missing id or action")) {
  $2
}
      const existing = getOfferById (id);
      if (return bad (res, "Offer not found", 404)) {
  $2
}
      const user = assertTalentOrClientForOffer (
        req,
        existing,
        req.headers["x - demo - talent - slug"] as string,
      );
      // Check condition
if ( {) {
  $2
}
        if (
          return bad (res, "Only talent can accept", 403)) {
  $2
}

        existing.status = "CONFIRMED";
        // Create a project upon acceptance;
        const project: Project = {


  }

          id: uuidv4 (),
          title: `Project with ${existing.talent_slug}`,
          summary: existing.scope_summary,
          client_id: existing.client_id,
          talent_slug: existing.talent_slug,
          startDateIso: existing.startDateIso,
          status: "ACTIVE",
          timeline:;
            existing.payment_terms.type === "milestone";
              ? existing.payment_terms.milestones || [];
              : [],
          documents: existing.agreement_url;
            ? [;
                {
                  id: uuidv4 (),
                  name: "Agreement",
                  url: existing.agreement_url,
                  uploadedAtIso: new Date ().toISOString (),
                },
              ];
            : [],
          notes: [],
        }
        save_project (project);
        existing.project_id = project.id;
        save_offer (existing);
        return res.json ({ ok: true, offer: existing, project });
      }
      // Check condition
if ( {) {
  $2
=======


}
        if (
          return bad (res, "Only talent can request changes", 403)) {
  $2
}
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote || "";
        save_offer (existing);
        return res.json ({ ok: true, offer: existing });
      }
      // Check condition
if ( {) {
  $2
}
        if (
          return bad (res, "Only talent can decline", 403)) {
  $2
}
        existing.status = "DECLINED";
        save_offer (existing);
        return res.json ({ ok: true, offer: existing });
      }
      return bad (res, "Unknown action");
    }
    return bad (res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.status_code || 500;
    return res;
      .status (status);
      .json ({ ok: false, error: e?.message || "Server error" });

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

=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { v4 as uuidv4 } from "uuid";

import {
<<<<<<< HEAD
  assertClient
  assertTalentOrClientForOffer
  getDemoUser
} from "../../../utils/marketplace/auth";
import {
  getOfferById
  listOffers
  saveOffer
  saveProject
=======
  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,;
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../../../utils/marketplace/store";

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";

import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth",
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store",
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {


    if (req.method === "GET") {
      const user = getDemoUser(req);
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id });

        return res.json({ ok: true, offers });
      }
      if (user.role === "talent") {
        const offers = listOffers({ talentSlug: user.talentSlug });
        return res.json({ ok: true, offers });
      }
      return bad(res, "Unknown role", 403);
    }
    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const {
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms
        agreementUrl
      } = req.body |{}
      if (!talentSlug |!startDateIso |!scopeSummary |!paymentTerms) {
        return bad(res, "Missing required fields");
      }
      const offer: Offer = {
        id: uuidv4()
        createdAtIso: new Date().toISOString()
        clientId: client.id
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms: paymentTerms as PaymentTerms
        agreementUrl
        status: "SENT"
      }
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }
    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body |{}
      if (!id |!action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(
        req
        existing
        req.headers["x-demo-talent-slug"] as string
      );
      if (action === "accept") {
        if (user.role !== "talent")
          return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4()
          title: `Project with ${existing.talentSlug}`
          summary: existing.scopeSummary
          clientId: existing.clientId
          talentSlug: existing.talentSlug
          startDateIso: existing.startDateIso
          status: "ACTIVE"
          timeline:
            existing.paymentTerms.type === "milestone"
              ? existing.paymentTerms.milestones |[]
              : []
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4()
                  name: "Agreement"
                  url: existing.agreementUrl
                  uploadedAtIso: new Date().toISOString()
                }
              ]
            : []
          notes: []
        }
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project });
      }
      if (action === "request_changes") {
        if (user.role !== "talent")
          return bad(res, "Only talent can request changes", 403);
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote |"";
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }
      if (action === "decline") {
        if (user.role !== "talent")
          return bad(res, "Only talent can decline", 403);
        existing.status = "DECLINED";

<<<<<<< HEAD
        const offers = listOffers({ talentSlug: user.talentSlug });
        return res.json({ ok: true, offers });
      }
      return bad(res, "Unknown role", 403)
    }

    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {};
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields")

        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      const offer: Offer = {

        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client.id,
        talentSlug,
        startDateIso,

        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,


    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      if (!id || !action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(
        req,
        existing,
        req && req.headers["x-demo-talent-slug"] as string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      );
      if (action === "accept") {

        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
        // Create a project upon acceptance
        const project: Project = {

          id: uuidv4(),
          title: `Project with ${existing && existing.talentSlug}`,
          summary: existing && existing.scopeSummary,
          clientId: existing && existing.clientId,
          talentSlug: existing && existing.talentSlug,
          startDateIso: existing && existing.startDateIso,
          status: "ACTIVE",

          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          documents: existing.agreementUrl

            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",

                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()}]
            : [],

        };
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project })
      }

              ]
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

            : []
          notes: []
        }

        existing.status = "DECLINED";
        save_offer (existing);
        return res.json ({ ok: true, offer: existing });
      }
      return bad (res, "Unknown action");
    }
    return bad (res, "Method not allowed", 405);
  } catch (e: any) {

    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }

  }
}

=======
    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req);
      const {
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms,
        agreementUrl,
      } = req.body || {};
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields");
      }

=======
    if (req.method === 'GET') {
      res.status(200).json({ offers: [] });
    } else if (req.method === 'POST') {
      const offer = {
        id: 'offer-id',
        createdAtIso: new Date().toISOString(),
        clientId: 'client-id',
        talentSlug: 'talent-slug',
        startDateIso: new Date().toISOString(),
        scopeSummary: 'Project scope',
        paymentTerms: { type: 'fixed', amount: 1000 },
        agreementUrl: 'agreement-url'
      };
      res.status(201).json({
        ok: true,
        offer
      });
    } else if (req.method === 'PATCH') {
      const existing = {
        id: 'existing-offer',
        status: 'ACTIVE'
      };
      return res.json({
        ok: true,
        offer: existing
      });
    } else {
      return bad(res, "Unknown role", 403);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
