    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || "pending",
    partnerId: auth.partner.id,
    await record_request (req, res, auth.partner, auth.api_key, started, 400)return res.status (400).json ({ error: 'Missing required fields' })}
  await fs.ensure_dir (path.dirname (TALENTS_FILE))const records = (await fs.path_exists (TALENTS_FILE))? await fs.readJSON (TALENTS_FILE): [];
    id: uuidv4(),name,email,skills: skills || [],programTrack: programTrack || null,certificationStatus: certificationStatus || 'pending',partnerId: auth.partner.id,}records && records.push(record)await fs && fs.writeJSON(TALENTS_FILE, records, { spaces: 2 })await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201)return res && res.status(201).json({ id: record && record.id })return res && res.status(201).json({ id: record && record.id })}
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json")export default async function handler() {const started = Date.now()const auth = await authenticateRequest(req)if (!auth) {return res.status(401).json({ error: "Unauthorized" })}
  if (!(await enforceRateLimit(auth.apiKey))) {await recordRequest(req, res, auth.partner, auth.apiKey, started, 429)return res.status(429).json({ error: "Rate limit exceeded" })}
  if (req.method !== "POST") {res.setHeader("Allow", "POST")await recordRequest(req, res, auth.partner, auth.apiKey, started, 405)return res.status(405).json({ error: "Method Not Allowed" })}
  const { name, email, skills, programTrack, certificationStatus } = req.body || {}if (!name || !email) {await recordRequest(req, res, auth.partner, auth.apiKey, started, 400)return res.status(400).json({ error: "Missing required fields" })}
  await fs.ensureDir(path.dirname(TALENTS_FILE))const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const now = new Date().toISOString()const record = {id: uuidv4(), name,email;
    skills: skills || [], programTrack: programTrack || null,certificationStatus: certificationStatus || "pending", partnerId: auth.partner.id,createdAt: now}records.push(record)await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 })await recordRequest(req, res, auth.partner, auth.apiKey, started, 201)return res.status(201).json({ id: record.id })}
    id: uuidv4 (),name,email,skills: skills || [],program_track: program_track || null,certification_status: certification_status || 'pending',partner_id: auth.partner.id,created_at: now,}

