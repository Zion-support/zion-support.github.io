import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader($2);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest($2);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const { apiKey } = auth,
  const keys = await listApiKeys($2);
  // Deactivate old key
  const existing = $2;
  if (existing) existing.active = $2;
  // Create new key
  const now = new Date().toISOString($2);
  const newKey = {
    id: uuidv4($2);
    partnerId: auth.partner.id,
    key: uuidv4($2);
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60},
  keys.push($2);
  await saveApiKeys($2);
  return res.status(201).json({ apiKey: newKey.key })
}