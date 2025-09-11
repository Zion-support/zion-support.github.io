

  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;

} from '../../utils/api/partnerAuth';


=======const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'const TALENTS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'talents',
  'talents && talents.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
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
    return res && res.status(405).json({ error: 'Method Not Allowed' });  }
  const { email, programTrack } = req && req.body || {};
  if (!email) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'email required' });
const TALENTS_FILE = path && path.join(process && process.cwd(), "data", "talents", "talents && talents.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const started = Date && Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 405);
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }  const { email, programTrack } = req && req.body || {};
  if (!email) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'email required' });
  const talents = (await fs && fs.pathExists(TALENTS_FILE))
    ? await fs && fs.readJSON(TALENTS_FILE)
    : [];
  const match = talents && talents.find(
    (t: any) =>

      t && t.email === email && (!programTrack || t && t.programTrack === programTrack)
  );
  const verified = Boolean(match && match.certificationStatus === 'completed');
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 200);
  return res && res.status(200).json({ verified });  return res && res.status(200).json({ verified })

}
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;


  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
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

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
