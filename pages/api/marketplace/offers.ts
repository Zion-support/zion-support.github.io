<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next",
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import {
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { v4 as uuidv4 } from "uuid";

import {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



import {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
=======

import type { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";

import {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,;
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
} from "../../../utils/marketplace/store";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
export default /**
 * handler - Function description
 */
function handler() {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    if (req.method === "GET") {
      const user = getDemoUser(req);
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id });
        return res.json({ ok: true, offers });
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD

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


    if (req && req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req && req.body || {};
=======
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
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    if (req.method === "GET") {
      const user = getDemoUser(req);
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id });
<<<<<<< HEAD
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
=======
        return res.json({ ok: true, offers });
      }
      if (user.role === "talent") {
=======
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      }

=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      const offer: Offer = {
=======
      const offer: Offer = {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client.id,
        talentSlug,
        startDateIso,
<<<<<<< HEAD
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
<<<<<<< HEAD
        status: "SENT"
=======
<<<<<<< HEAD
        status: "SENT",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      };
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        status: "SENT"},
      saveOffer(offer),
      return res.status(201).json({ ok: true, offer })
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
    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {},
      if (!id || !action) return bad(res, "Missing id or action"),
      const existing = getOfferById(id),
      if (!existing) return bad(res, "Offer not found", 404),
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string),
      if (action === "accept") {
        if (user.role !== "talent") return bad(res, "Only talent can accept", 403),
        existing.status = "CONFIRMED",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        // Create a project upon acceptance
        const project: Project = {
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          id: uuidv4(),
          title: `Project with ${existing && existing.talentSlug}`,
          summary: existing && existing.scopeSummary,
          clientId: existing && existing.clientId,
          talentSlug: existing && existing.talentSlug,
          startDateIso: existing && existing.startDateIso,
          status: "ACTIVE",
<<<<<<< HEAD
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
          timeline:
            existing.paymentTerms.type === "milestone"
              ? existing.paymentTerms.milestones || []
              : [],
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
=======
<<<<<<< HEAD
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
          documents: existing.agreementUrl

            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
<<<<<<< HEAD
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()}]
            : [],
<<<<<<< HEAD
<<<<<<< HEAD
          notes: []
=======
<<<<<<< HEAD
          notes: [],
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          notes: []
          notes: [],
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
        saveOffer(existing);
        return res.json({ ok: true, offer: existing })
      }
<<<<<<< HEAD
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode |500;
    return res
      .status(status)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      .json({ ok: false, error: e?.message |"Server error" });


      if (action === "decline") {
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      .json({ ok: false, error: e?.message || "Server error" });
          notes: []},
        saveProject(project),
        existing.projectId = project.id,
        saveOffer(existing),
        return res.json({ ok: true, offer: existing, project })
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
      // Check condition
if ( {) {
  $2
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
        if (
          return bad (res, "Only talent can decline", 403)) {
  $2
}
<<<<<<< HEAD
      if (action === "request_changes") {
        if (user.role !== "talent") return bad(res, "Only talent can request changes", 403),
        existing.status = "CHANGES_REQUESTED",
        existing.changeRequestNote = changeRequestNote || "",
        saveOffer(existing),
        return res.json({ ok: true, offer: existing })
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
;
      if (action === "decline") {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        if (user.role !== "talent") return bad(res, "Only talent can decline", 403);
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
    const status = e?.status_code || 500;
    return res;
      .status (status);
      .json ({ ok: false, error: e?.message || "Server error" });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
