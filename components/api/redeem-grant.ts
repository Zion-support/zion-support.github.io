<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import fs from "fs-extra",
import path from "path",
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth",
import { v4 as uuidv4 } from "uuid",
const REDEMPTIONS_FILE = path.join(process.cwd(), "data", "partners", "grant-redemptions.json"),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;
import { authenticateRequest, enforceRateLimit, recordRequest } from &quot;../../utils/api/partnerAuth&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

const REDEMPTIONS_FILE = path.join(process.cwd(), &quot;data&quot;, &quot;partners&quot;, &quot;grant-redemptions.json&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now(),
  const auth = await authenticateRequest(req),
  if (!auth) {
<<<<<<< HEAD
    return res.status(401).json({ error: "Unauthorized" })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import fs from "fs-extra",;
import path from "path",;
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth",;
import { v4 as uuidv4 } from "uuid",;
const REDEMPTIONS_FILE = path.join(process.cwd(), "data", "partners", "grant-redemptions.json"),;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const started = Date.now(),;
  const auth = await authenticateRequest(req),;
  if (!auth) {;
    return res.status(401).json({ error: "Unauthorized" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
  if (!(await enforceRateLimit(auth.apiKey))) {;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429),;
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
<<<<<<< HEAD
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405),
    return res.status(405).json({ error: "Method Not Allowed" })
=======
    return res.status(401).json({ error: &quot;Unauthorized&quot; });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: &quot;Rate limit exceeded&quot; });
  }
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const { studentEmail, grantCode, courseId } = req.body || {},
  if (!studentEmail || !grantCode || !courseId) {
<<<<<<< HEAD
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })
=======
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: &quot;Missing required fields&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST"),;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405),;
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { studentEmail, grantCode, courseId } = req.body || {},;
  if (!studentEmail || !grantCode || !courseId) {;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),;
    return res.status(400).json({ error: "Missing required fields" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE)),;
  const records = (await fs.pathExists(REDEMPTIONS_FILE)) ? await fs.readJSON(REDEMPTIONS_FILE) : [],;
  const now = new Date().toISOString(),;
  const record = {;
    id: uuidv4(),;
    partnerId: auth.partner.id,;
    studentEmail,;
    grantCode,;
    courseId,;
    redeemedAt: now},;
  records.push(record),;
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now });
}