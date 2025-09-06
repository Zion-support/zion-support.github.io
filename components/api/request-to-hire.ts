import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' }),
  }


=======
  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body || {},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
    return res.status(400).json({ error: 'Missing required fields' }),
  }

  try {
    const timestamp = new Date().toISOString(),


    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'datarequests'),
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }),

=======
    const payload = { timestamp, talentSlug, requesterName, requesterEmail, projectInfo },
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/g, '-')}.json`),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');

    // Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer)

    return res.status(200).json({ ok: true }),
  } catch (err) {
    console.error('Request-to-hire failed', err),

=======
    return res.status(500).json({ error: 'Internal error' })
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
