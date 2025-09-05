import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;
import { authenticateRequest, enforceRateLimit, recordRequest } from &quot;../../utils/api/partnerAuth&quot;;

const TALENTS_FILE = path.join(process.cwd(), &quot;data&quot;, &quot;talents&quot;, &quot;talents.json&quot;);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
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
  }
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: &quot;email required&quot; });
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack));
  const verified = Boolean(match && match.certificationStatus === &quot;completed&quot;);
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });
}