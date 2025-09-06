<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs - extra';
import path from 'path';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  authenticateRequest
  enforceRateLimit
  recordRequest;
  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;
=======


  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from '../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

const REDEMPTIONS_FILE = path.join(
  process.cwd()
  'data'
  'partners'
  'grant-redemptions.json'
=======

const REDEMPTIONS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'partners',
  'grant-redemptions && redemptions.json'
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (!auth) {
    return res && res.status(401).json({ error: 'Unauthorized' });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: 'Rate limit exceeded' });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);
    return res && res.status(405).json({ error: 'Method Not Allowed' });  }
  const { studentEmail, grantCode, courseId } = req && req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'Missing required fields' });

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
const REDEMPTIONS_FILE = path.join(process.cwd(), "data", "partners", "grant-redemptions.json");

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const started = Date.now();
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  try {
  const started = Date && Date.now();
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: "Rate limit exceeded" })
  }
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));
  const records = (await fs.pathExists(REDEMPTIONS_FILE))
    ? await fs.readJSON(REDEMPTIONS_FILE)
=======
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

=======
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
<<<<<<< HEAD
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'Missing required fields' });
  await fs && fs.ensureDir(path && path.dirname(REDEMPTIONS_FILE));
  const records = (await fs && fs.pathExists(REDEMPTIONS_FILE))
    ? await fs && fs.readJSON(REDEMPTIONS_FILE)
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(),
    partnerId: auth && auth.partner.id,
    studentEmail,
    grantCode,
    courseId,
    redeemedAt: now,
  };
  records && records.push(record);
  await fs && fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201);
  return res && res.status(201).json({ id: record && record.id, redeemedAt: now });  return res && res.status(201).json({ id: record && record.id, redeemedAt: now })

<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: "Missing required fields" })
  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));
  const records = (await fs.pathExists(REDEMPTIONS_FILE)) ? await fs.readJSON(REDEMPTIONS_FILE) : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(), partnerId: auth.partner.id,
    studentEmail;
    grantCode;
    courseId;
    redeemedAt: now};
  records.push(record);
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  authenticate_request,
  enforceRateLimit,
  record_request,
} from '../../utils / api / partner_auth';
import { v4 as uuidv4 } from 'uuid';
;
const REDEMPTIONS_FILE = path.join (
  process.cwd (),
  'data',
  'partners',
  'grant - redemptions.json');
;
export default async /**
 * handler - Function description
 */
function handler() {
  const started = Date.now ();
  const auth = await authenticate_request (req),
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
    return res.status (405).json ({ error: 'Method Not Allowed' });  }
  const { student_email, grant_code, course_id } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);
    return res.status (400).json ({ error: 'Missing required fields' });
export default async /**
 * handler - Function description
 */
function handler() {
  const started = Date.now ();
  const auth = await authenticate_request (req);
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Unauthorized" });
  }
  if ()) {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 429);
    return res.status (429).json ({ error: "Rate limit exceeded" });
  }
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow", "POST");
    await record_request (req, res, auth.partner, auth.api_key, started, 405);
    return res.status (405).json ({ error: "Method Not Allowed" });
  }
  const { student_email, grant_code, course_id } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    await record_request (req, res, auth.partner, auth.api_key, started, 400);
    return res.status (400).json ({ error: 'Missing required fields' });
  await fs.ensure_dir (path.dirname (REDEMPTIONS_FILE));
  const records = (await fs.path_exists (REDEMPTIONS_FILE));
    ? await fs.readJSON (REDEMPTIONS_FILE);
    : [];
  const now = new Date ().toISOString ();
  const record = {
    id: uuidv4 (),
    partner_id: auth.partner.id,
    student_email,
    grant_code,
    course_id,
redeemed_at: now,
  }
  records.push (record);
  await fs.writeJSON (REDEMPTIONS_FILE, records, { spaces: 2 });
  await record_request (req, res, auth.partner, auth.api_key, started, 201);
  return res.status (201).json ({ id: record.id, redeemed_at: now });  return res.status (201).json ({ id: record.id, redeemed_at: now });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
<<<<<<< HEAD
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
}
}
}
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
