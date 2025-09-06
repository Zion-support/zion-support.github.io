import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body || {};
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
  const match = null;
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
