import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;
import { authenticateRequest, enforceRateLimit, recordRequest } from &quot;../../utils/api/partnerAuth&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

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
  const { name, email, skills, programTrack, certificationStatus } = req.body || {};
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: &quot;Missing required fields&quot; });
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE));
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || &quot;pending&quot;,
    partnerId: auth.partner.id,
    createdAt: now};
  records.push(record);
  await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id });
}