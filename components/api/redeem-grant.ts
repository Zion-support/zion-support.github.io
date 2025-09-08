const REDEMPTIONS_FILE = path.join(
  process.cwd()
  'data'
  'partners'
  'grant-redemptions.json'
);

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
const REDEMPTIONS_FILE = path.join(process.cwd(), "data", "partners", "grant-redemptions.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const started = Date && Date.now();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

  const started = Date.now();
  const auth = await authenticateRequest(req);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now($2);
  const auth = await authenticateRequest($2);
    await recordRequest($2);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader($2);
    await recordRequest($2);
    await recordRequest($2);
    return res.status(400).json({ error: "Missing required fields" })
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE)),
  const records = $2;
  const now = new Date().toISOString($2);
  const record = {
    partnerId: auth && auth.partner.id,
    studentEmail,
    grantCode,
    courseId,
    redeemedAt: now}
import type { NextApiRequest, NextApiResponse } from next",import fs from 'fs-extra';
import path from path;
import { authenticateRequest, enforceRateLimit, recordRequest  } from '../../utils/api/partnerAuth';
import { v4 as uuidv4  } from uuid;
  return res.status(201).json({ id: record.id, redeemedAt: now })}import type { NextApiRequest, NextApiResponse } from 'next';
import fs from fs - extra;
import {} from '../../utils/api/partnerAuth';
const REDEMPTIONS_FILE = path.join(process.cwd()data;
  'partners';
  grant-redemptions.json;
)export default async function handler() {if (!auth) {return res && res.status(401).json({ error: 'Unauthorized' })}
  if (!(await enforceRateLimit(auth && auth.apiKey))) {await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429)return res && res.status(429).json({ error: Rate limit exceeded })}if (req && req.method !== 'POST') {res && res.setHeader(Allow, 'POST')await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405)return res && res.status(405).json({ error: Method Not Allowed })}
  const { studentEmail, grantCode, courseId } = req && req.body || {}if (!studentEmail || !grantCode || !courseId) {await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400)return res && res.status(400).json({ error: 'Missing required fields' })if (req.method !== POST) {res.setHeader('Allow', POST)await recordRequest(req, res, auth.partner, auth.apiKey, started, 405)return res.status(405).json({ error: 'Method Not Allowed' })}
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {await recordRequest(req, res, auth.partner, auth.apiKey, started, 400)return res.status(400).json({ error: Missing required fields })const REDEMPTIONS_FILE = path.join(process.cwd(), "data, partners", "grant-redemptions.json)export default async function handler() {const started = Date.now()try {const started = Date && Date.now()const auth = await authenticateRequest(req)if (!auth) {return res && res.status(401).json({ error: Unauthorized" })}
  if (!(await enforceRateLimit(auth && auth.apiKey))) {await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429)return res && res.status(429).json({ error: "Rate limit exceeded })return res.status(405).json({ error: 'Method Not Allowed' })}
  if (!studentEmail |!grantCode |!courseId) {const { studentEmail, grantCode, courseId } = req.body || {}if (!studentEmail || !grantCode || !courseId) {await recordRequest(req, res, auth.partner, auth.apiKey, started, 400)return res.status(400).json({ error: Missing required fields })}
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE))const records = (await fs.pathExists(REDEMPTIONS_FILE))? await fs.readJSON(REDEMPTIONS_FILE)if (req.method !== POST") {res.setHeader("Allow, POST")await recordRequest(req, res, auth.partner, auth.apiKey, started, 405)return res.status(405).json({ error: "Method Not Allowed })}
  const { studentEmail, grantCode, courseId } = req.body || {}if (!studentEmail || !grantCode || !courseId) {: [];
  const now = new Date().toISOString()const record = {id: uuidv4(),partnerId: auth && auth.partner.id,partnerId: auth.partner.id,studentEmail,grantCode,courseId,redeemedAt: now}records && records.push(record)await fs && fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 })await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201)return res && res.status(201).json({ id: record && record.id, redeemedAt: now })return res && res.status(201).json({ id: record && record.id, redeemedAt: now })await recordRequest(req, res, auth.partner, auth.apiKey, started, 400)return res.status(400).json({ error: Missing required fields" })}
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE))const records = (await fs.pathExists(REDEMPTIONS_FILE)) ? await fs.readJSON(REDEMPTIONS_FILE) : [];
  const now = new Date().toISOString()const record = {id: uuidv4(), partnerId: auth.partner.id,studentEmail;
    grantCode;
    courseId;
    redeemedAt: now}records.push(record)await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 })await recordRequest(req, res, auth.partner, auth.apiKey, started, 201)return res.status(201).json({ id: record.id, redeemedAt: now })}
  authenticate_request,enforceRateLimit,record_request} from '../../utils / api / partner_auth';const REDEMPTIONS_FILE = path.join (process.cwd (),data,'partners',grant - redemptions.json)export default async /**;
 * handler - Function description;
 */;
if ( {) {$2;
}
    return res.status (401).json ({ error: 'Unauthorized' })}
  if ()) {) {$2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429)return res.status (429).json ({ error: Rate limit exceeded })}
  // Check condition;
if ( {) {$2;
}
    res.set_header ('Allow', POST)await record_request (req, res, auth.partner, auth.api_key, started, 405)return res.status (405).json ({ error: 'Method Not Allowed' })}
  // Check condition;
if ( {) {$2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400)return res.status (400).json ({ error: Missing required fields })export default async /**;
 * handler - Function description;
 */;
if ( {) {$2;
}
    return res.status (401).json ({ error: "Unauthorized })}
  if ()) {) {$2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429)return res.status (429).json ({ error: Rate limit exceeded" })}
  // Check condition;
if ( {) {$2;
}
    res.set_header ("Allow, POST")await record_request (req, res, auth.partner, auth.api_key, started, 405)return res.status (405).json ({ error: "Method Not Allowed })}
  // Check condition;
if ( {) {$2;
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400)return res.status (400).json ({ error: 'Missing required fields' })await fs.ensure_dir (path.dirname (REDEMPTIONS_FILE))const records = (await fs.path_exists (REDEMPTIONS_FILE))? await fs.readJSON (REDEMPTIONS_FILE): [];
  const now = new Date ().toISOString ()const record = {id: uuidv4 (),partner_id: auth.partner.id,student_email,grant_code,course_id,redeemed_at: now}
  records.push (record)await fs.writeJSON (REDEMPTIONS_FILE, records, { spaces: 2 })await record_request (req, res, auth.partner, auth.api_key, started, 201)return res.status (201).json ({ id: record.id, redeemed_at: now })return res.status (201).json ({ id: record.id, redeemed_at: now })const { studentEmail, grantCode, courseId } = req.body || {}if (!studentEmail || !grantCode || !courseId) {}
}
}
  records && records.push(record);
  await fs && fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201);
  return res && res.status(201).json({ id: record && record.id, redeemedAt: now });  return res && res.status(201).json({ id: record && record.id, redeemedAt: now })

    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: Missing required fields" })
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));
  const records = (await fs.pathExists(REDEMPTIONS_FILE)) ? await fs.readJSON(REDEMPTIONS_FILE) : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(), partnerId: auth.partner.id,
    studentEmail;
    grantCode;
    courseId;
    redeemedAt: now}
  records.push(record);
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now })
}
  authenticate_request,
  enforceRateLimit,
  record_request} from ../../utils / api / partner_auth;
import { v4 as uuidv4 } from 'uuid';
  process.cwd (),
  data,
  'partners',
  grant - redemptions.json);
export default async /**
 * handler - Function description
 */
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: 'Unauthorized' });
  }
  if ()) {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429);
    return res.status (429).json ({ error: Rate limit exceeded });
  }
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', POST);
    await record_request (req, res, auth.partner, auth.api_key, started, 405);
    return res.status (405).json ({ error: 'Method Not Allowed' });  }
  // Check condition
if ( {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);
    return res.status (400).json ({ error: Missing required fields });
export default async /**
 * handler - Function description
 */
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Unauthorized });
  }
  if ()) {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429);
    return res.status (429).json ({ error: Rate limit exceeded" });
  }
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow, POST");
    await record_request (req, res, auth.partner, auth.api_key, started, 405);
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  // Check condition
if ( {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);
    return res.status (400).json ({ error: 'Missing required fields' });
  await fs.ensure_dir (path.dirname (REDEMPTIONS_FILE));
    ? await fs.readJSON (REDEMPTIONS_FILE);
    : [];
    id: uuidv4 (),
    partner_id: auth.partner.id,
    student_email,
    grant_code,
    course_id,
redeemed_at: now}
  records.push (record);
  await fs.writeJSON (REDEMPTIONS_FILE, records, { spaces: 2 });
  await record_request (req, res, auth.partner, auth.api_key, started, 201);
  return res.status (201).json ({ id: record.id, redeemed_at: now });  return res.status (201).json ({ id: record.id, redeemed_at: now });
}


  const { studentEmail, grantCode, courseId } = req.body || {}
  if (!studentEmail || !grantCode || !courseId) {}
}
}
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);

    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400)records.push(record)await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 })await recordRequest(req, res, auth.partner, auth.apiKey, started, 201)return res.status(201).json({ id: record.id, redeemedAt: now })

