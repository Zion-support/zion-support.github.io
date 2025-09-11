
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs - extra';
import path from 'path';
import {


  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;

} from '../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

<<<<<<< HEAD



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TALENTS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'talents',
  'talents && talents.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: 'Unauthorized' });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: 'Rate limit exceeded' });
  }
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);
    return res && res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { name, email, skills, programTrack, certificationStatus } =
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    req && req.body || {};
  if (!name || !email) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    req.body |{}
  if (!name |!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  await fs && fs.ensureDir(path && path.dirname(TALENTS_FILE));
  const records = (await fs && fs.pathExists(TALENTS_FILE))
    ? await fs && fs.readJSON(TALENTS_FILE)
  authenticate_request,
  enforceRateLimit,
  record_request,
} from '../../utils / api / partner_auth';
import { v4 as uuidv4 } from 'uuid';
;
const TALENTS_FILE = path.join (
  process.cwd (),
  'data',
  'talents',
  'talents.json');
;
export default async /**
 * handler - Function description
 */
function handler() {
  const auth = await authenticate_request (req);
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
    return res.status (429).json ({ error: 'Rate limit exceeded' });
  }
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    await record_request (req, res, auth.partner, auth.api_key, started, 405);
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  const { name, email, skills, program_track, certification_status } =;
    req.body || {}
  // Check condition
if ( {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);
    return res.status (400).json ({ error: 'Missing required fields' });
  }
  await fs.ensure_dir (path.dirname (TALENTS_FILE));
  const records = (await fs.path_exists (TALENTS_FILE));
    ? await fs.readJSON (TALENTS_FILE);
    : [];
<<<<<<< HEAD
  const now = new Date ().toISOString ();
  const record = {
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
  const now = new Date().toISOString();
  const record = {
    id: uuidv4()
    name
    email
    skills: skills |[]
    programTrack: programTrack |null
    certificationStatus: certificationStatus |'pending'
    partnerId: auth.partner.id
createdAt: now
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || 'pending',

    partnerId: auth.partner.id,


  };
  records && records.push(record);
  await fs && fs.writeJSON(TALENTS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201);
  return res && res.status(201).json({ id: record && record.id });  return res && res.status(201).json({ id: record && record.id })
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { name, email, skills, programTrack, certificationStatus } = req.body || {};
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: "Missing required fields" })
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE));
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(), name,
    email;
    skills: skills || [], programTrack: programTrack || null,
    certificationStatus: certificationStatus || "pending", partnerId: auth.partner.id,
    createdAt: now};
  records.push(record);
  await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: uuidv4 (),
    name,
    email,
    skills: skills || [],
    program_track: program_track || null,
    certification_status: certification_status || 'pending',
    partner_id: auth.partner.id,
created_at: now,
  }
  records.push (record);
  await fs.writeJSON (TALENTS_FILE, records, { spaces: 2 });
  await record_request (req, res, auth.partner, auth.api_key, started, 201);
  return res.status (201).json ({ id: record.id });  return res.status (201).json ({ id: record.id });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now()
  const auth = await authenticateRequest(req)
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
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { name, email, skills, programTrack, certificationStatus } = req.body || {},
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })
  }
  const { name, email, skills, programTrack, certificationStatus } = req.body || {},
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })

  }
  await fs.ensureDir(path.dirname(TALENTS_FILE)),
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : []
  const now = new Date().toISOString()
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

}

<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
import {
  authenticateRequest
  enforceRateLimit
  recordRequest;
  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;
} from '../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { name, email, skills, programTrack, certificationStatus } =
    req.body |{}
  if (!name |!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE));
  const records = (await fs.pathExists(TALENTS_FILE))
    ? await fs.readJSON(TALENTS_FILE)
    : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4()
    name
    email
    skills: skills |[]
    programTrack: programTrack |null
    certificationStatus: certificationStatus |'pending'
    partnerId: auth.partner.id
createdAt: now
  }
    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || 'pending',
    partnerId: auth.partner.id,
    createdAt: now,
createdAt: now,
    createdAt: now,
  };
  records.push(record);
  await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id });  return res.status(201).json({ id: record.id })
}

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
