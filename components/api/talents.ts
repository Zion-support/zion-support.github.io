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
  const {_name, _email, _skills, _programTrack, _certificationStatus} = req.body || {};
  if (!name || !email) {_await recordRequest(req, _res, _auth.partner, _auth.apiKey, _started, _400);
    return res.status(400).json({ error: "Missing required fields"});
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE));
  const _records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const _now = new Date().toISOString();
  const _record = {_id: uuidv4(), _name, _email, _skills: skills || [], _programTrack: programTrack || null, _certificationStatus: certificationStatus || "pending", _partnerId: auth.partner.id, _createdAt: now};
  records.push(record);
  await fs.writeJSON(TALENTS_FILE, records, {_spaces: 2});
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({_id: record.id});
}