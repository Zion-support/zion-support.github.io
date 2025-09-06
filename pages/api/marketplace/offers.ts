import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }
}
