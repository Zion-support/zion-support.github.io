import type { NextApiRequest, NextApiResponse } from "next",
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth",

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    return res.status(405).json({ error: "Method Not Allowed" })  }
  const { apiKey, ttlSeconds } = req.body || {},
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })  }
  const match = await findPartnerByApiKey(apiKey),
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" })  }
  const { partner, apiKey: key } = match,
  const token = signJwt(
    {
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") {
    res.setHeader("Allow", _"POST");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const {_apiKey, _ttlSeconds} = req.body || {};
  if (!apiKey) {_return res.status(400).json({ error: "apiKey required"});
  }
  const _match = await findPartnerByApiKey(apiKey);
  if (!match) {_return res.status(401).json({ error: "Invalid API key"});
  }
  const {_partner, _apiKey: key} = match;
  const _token = signJwt(
    {_sub: partner.id, _apiKeyId: key.id, _name: partner.name, _entityType: partner.entityType, _useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })  return res.status(200).json({_token, _partner: { id: partner.id, _name: partner.name} });
}