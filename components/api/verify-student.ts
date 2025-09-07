import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json"),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now($2);
  const auth = await authenticateRequest($2);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest($2);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader($2);
    await recordRequest($2);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body || {},
  if (!email) {
    await recordRequest($2);
    return res.status(400).json({ error: "email required" })
  }
  const talents = $2;
  const match = $2;
  const verified = Boolean($2);
  await recordRequest($2);
  return res.status(200).json({ verified })
}