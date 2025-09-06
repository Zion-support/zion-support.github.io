<<<<<<< HEAD
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
} from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
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
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
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
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
        const offers = listOffers({ talentSlug: user.talentSlug });
        return return res.json({ ok: true, offers });
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
      return bad(res, "Unknown role", 403)
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
    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient(req),
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
        status: "SENT",
      };
      saveOffer(offer);
      return res.status(201).json({ ok: true, offer });
    }

    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {};
      if (!id || !action) return bad(res, "Missing id or action");
      const existing = getOfferById(id);
      if (!existing) return bad(res, "Offer not found", 404);
      const user = assertTalentOrClientForOffer(
        req,
        existing,
        req.headers["x-demo-talent-slug"] as string,
      );
      if (action === "accept") {
        if (user.role !== "talent")
          return bad(res, "Only talent can accept", 403);
        existing.status = "CONFIRMED";
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4(),
          title: `Project with ${existing.talentSlug}`,
          summary: existing.scopeSummary,
          clientId: existing.clientId,
          talentSlug: existing.talentSlug,
          startDateIso: existing.startDateIso,
          status: "ACTIVE",
<<<<<<< HEAD
          timeline:
            existing.paymentTerms.type === "milestone"
              ? existing.paymentTerms.milestones || []
              : [],
=======
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString(),
                },
              ]
            : [],
<<<<<<< HEAD
          notes: [],
        };
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
        return res.json({ ok: true, offer: existing, project });
      }

      if (action === "request_changes") {
        if (user.role !== "talent")
          return bad(res, "Only talent can request changes", 403);
        existing.status = "CHANGES_REQUESTED";
        existing.changeRequestNote = changeRequestNote || "";
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      if (action === "decline") {
        if (user.role !== "talent")
          return bad(res, "Only talent can decline", 403);
        existing.status = "DECLINED";
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      return bad(res, "Unknown action");
    }

    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message || "Server error" });
=======
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
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
        if (user.role !== "talent") return bad(res, "Only talent can decline", 403);
        existing.status = "DECLINED";
        saveOffer(existing);
        return return res.json({ ok: true, offer: existing });
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
      return bad(res, "Unknown action");
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
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500,
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
;
    return bad(res, "Method not allowed", 405);
  } catch (error) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
