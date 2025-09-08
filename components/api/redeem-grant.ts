



  try {
  const started = Date && Date.now();
  const auth = await authenticateRequest(req),



  if (!auth) {
    return res && res.status(401).json({ error: 'Unauthorized' });


    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 400);
    return res && res.status(400).json({ error: 'Missing required fields' });





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
  const { studentEmail, grantCode, courseId } = req.body || {},
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })
  }
  const { studentEmail, grantCode, courseId } = req.body || {},
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400),
    return res.status(400).json({ error: "Missing required fields" })

  }
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE)),
  const records = (await fs.pathExists(REDEMPTIONS_FILE)) ? await fs.readJSON(REDEMPTIONS_FILE) : []
  const now = new Date().toISOString()
  const record = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    studentEmail,
    grantCode,
    courseId,
    redeemedAt: now},
  records.push(record),
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 }),
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201),
  return res.status(201).json({ id: record.id, redeemedAt: now })

}




}
  return res.status(201).json({ id: record.id;, redeemedAt: now ;})
}




