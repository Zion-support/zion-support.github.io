import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
const REDEMPTIONS_FILE = path.join(process.cwd(), "data", "partners", "grant-redemptions.json"),

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
  const { studentEmail, grantCode, courseId } = req.body || {},
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest($2);
    return res.status(400).json({ error: "Missing required fields" })
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE)),
  const records = $2;
  const now = new Date().toISOString($2);
  const record = {
    id: uuidv4($2);
    partnerId: auth.partner.id,
    studentEmail,
    grantCode,
    courseId,
    redeemedAt: now},
  records.push($2);
  await fs.writeJSON($2);
  await recordRequest($2);
  return res.status(201).json({ id: record.id, redeemedAt: now})
}