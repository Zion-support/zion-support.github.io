<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import fs from "fs-extra",;
import path from "path",;
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth",;
import { v4 as uuidv4 } from "uuid",;
;
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json"),;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  const started = Date.now(),;
  const auth = await authenticateRequest(req),;
  if (!auth) {;
    return res.status(401).json({ error:"Unauthorized" }),;
  }
  if (!(await enforceRateLimit(auth.apiKey))) {;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429),;
    return res.status(429).json({ error:"Rate limit exceeded" }),;
  }
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST"),;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405),;
    return res.status(405).json({ error:"Method Not Allowed" }),;
  }
  const { name, email, skills, programTrack, certificationStatus } = req.body || {},;
  if (!name || !email) {;
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),;
    return res.status(400).json({ error:"Missing required fields" }),;
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE)),;
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) :[],;
  const now = new Date().toISOString(),;
  const record = {;
    id:uuidv4(),;
    name,;
    email,;
    skills:skills || [],;
    programTrack:programTrack || null,;
    certificationStatus:certificationStatus || "pending",;
    partnerId:auth.partner.id,;
    createdAt:now},;
  records.push(record),;
  await fs.writeJSON(TALENTS_FILE, records, { spaces:2 }),;
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201),;
  return res.status(201).json({ id:record.id }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import fs from "fs-extra",
import path from "path",
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth",
import { v4 as uuidv4 } from "uuid",
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json"),
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now(),
  const auth = await authenticateRequest(req),
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429),
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405),
    return res.status(405).json({ error: "Method Not Allowed" })  }
  const { name, email, skills, programTrack, certificationStatus } = req.body || {},
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })  }
  await fs.ensureDir(path.dirname(TALENTS_FILE)),
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [],
  const now = new Date().toISOString(),
  const record = {
    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || &quot;pending&quot;,
    partnerId: auth.partner.id,
    createdAt: now},
  records.push(record),
  await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 }),
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201),
  return res.status(201).json({ id: record.id })
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}