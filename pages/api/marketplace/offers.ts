
<<<<<<< HEAD
import { v4 as uuidv4 } from "uuid";

import {

} from "../../../utils/marketplace/store";
=======


import {
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

import type { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";

import {

  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,;
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";

import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import {
  assert_client,
  assertTalentOrClientForOffer,
  getDemoUser,
} from '../../../utils / marketplace / auth';
import {
  getOfferById,
  list_offers,
  save_offer,
  save_project,
} from '../../../utils / marketplace / store';
import { Offer, PaymentTerms, Project  } from '../../../utils / marketplace / types';
/**
 * bad - Function description
 */
function bad() {
  return res.status (code).json ({ ok: false, error: message });
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
      return bad (res, "Unknown role", 403);
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
=======
    // Check condition
if ( {) {
  $2
}
      // Create an offer (client sends an offer to confirm);
      const client = assert_client (req);
      const {
        talent_slug,
        startDateIso,
        scope_summary,
        payment_terms,
        agreement_url,
      } = req.body || {}
      // Check condition
if ( {) {
  $2
}
        return bad (res, "Missing required fields");
      }
      const offer: Offer = {
        id: uuidv4 (),
        createdAtIso: new Date ().toISOString (),
        client_id: client.id,
        talent_slug,

        startDateIso,
        scope_summary,
        payment_terms: payment_terms as PaymentTerms,
        agreement_url,
        status: "SENT",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
<<<<<<< HEAD

import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

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

      const offer: Offer = {
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client.id,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,

      };
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }

    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {};
=======
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";


    if (req && req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req && req.body || {};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";

        // Create a project upon acceptance
        const project: Project = {
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          id: uuidv4(),
          title: `Project with ${existing && existing.talentSlug}`,
          summary: existing && existing.scopeSummary,
          clientId: existing && existing.clientId,
          talentSlug: existing && existing.talentSlug,
          startDateIso: existing && existing.startDateIso,
          status: "ACTIVE",

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          documents: existing.agreementUrl

            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
<<<<<<< HEAD
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()}]
            : [],

        };
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project })
      }
=======
                  url: existing && existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString(),
                },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            : []
          notes: []
        }
=======
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
=======
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
<<<<<<< HEAD

        saveOffer(existing);
        return res.json({ ok: true, offer: existing })
      }

        if (user.role !== "talent") return bad(res, "Only talent can decline", 403);
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        existing.status = "DECLINED";
        save_offer (existing);
        return res.json ({ ok: true, offer: existing });
      }
      return bad (res, "Unknown action");
    }
    return bad (res, "Method not allowed", 405);
  } catch (e: any) {
<<<<<<< HEAD
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })

  }

  }
}

=======
    const status = e?.status_code || 500;
    return res;
      .status (status);
      .json ({ ok: false, error: e?.message || "Server error" });
  }
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
