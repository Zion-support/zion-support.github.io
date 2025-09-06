import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD
  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body || {};
=======
  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body || {};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    console.log('[Operator] New request to hire:', {
      timestamp,
      talentSlug,
      requesterName,
      requesterEmail,
      projectInfo,
    });

    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'data', 'requests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const payload = {
      timestamp,
      talentSlug,
      requesterName,
      requesterEmail,
      projectInfo,
    };
    const file = path.join(
      dir,
      `request-${timestamp.replace(/[:.]/g, '-')}.json`
    );
=======
    console.log('[Operator] New request to hire:', { timestamp, talentSlug, requesterName, requesterEmail, projectInfo });

    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'datarequests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const payload = { timestamp, talentSlug, requesterName, requesterEmail, projectInfo };
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/g, '-')}.json`);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');

    // Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer)

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Request-to-hire failed', err);
<<<<<<< HEAD
    return res.status(500).json({ error: 'Internal error' });
  }
=======
    return res.status(500).json({ error: 'Internal error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
