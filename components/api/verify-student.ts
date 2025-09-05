<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import fs from "fs-extra",
import path from "path",
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth",

const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json"),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;
import { authenticateRequest, enforceRateLimit, recordRequest } from &quot;../../utils/api/partnerAuth&quot;;

const TALENTS_FILE = path.join(process.cwd(), &quot;data&quot;, &quot;talents&quot;, &quot;talents.json&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now(),
  const auth = await authenticateRequest(req),
  if (!auth) {
<<<<<<< HEAD
    return res.status(401).json({ error: "Unauthorized" })
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429),
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
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
  const { email, programTrack } = req.body || {},
  if (!email) {
<<<<<<< HEAD
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "email required" })
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [],
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack)),
  const verified = Boolean(match && match.certificationStatus === "completed"),
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200),
  return res.status(200).json({ verified })
=======
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: &quot;email required&quot; });
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack));
  const verified = Boolean(match && match.certificationStatus === &quot;completed&quot;);
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type {_NextApiRequest, _NextApiResponse} from "next";
import fs from "fs-extra";
import path from "path";

const _TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _started = Date.now();
  const _auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized"});
  }
  if (!(await enforceRateLimit(auth.apiKey))) {_await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _429);
    return res.status(429).json({ error: "Rate limit exceeded"});
  }
  if (req.method !== "POST") {_res.setHeader("Allow", _"POST");
    await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _405);
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const {_email, _programTrack} = req.body || {};
  if (!email) {_await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _400);
    return res.status(400).json({ error: "email required"});
  }
  const _talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const _match = talents.find(_(t: unknown) => t.email === email && (!programTrack || t.programTrack === programTrack));
  const _verified = Boolean(match && match.certificationStatus === "completed");
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({_verified});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}