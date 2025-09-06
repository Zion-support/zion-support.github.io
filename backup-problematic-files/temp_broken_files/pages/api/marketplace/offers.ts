import type { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuidv4 } from "uuid"
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/