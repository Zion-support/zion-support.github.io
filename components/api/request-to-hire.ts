import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { talentSlug, requesterName, requesterEmail, projectInfo } =
<<<<<<< HEAD
    req.body |{};  if (!talentSlug |!requesterName |!requesterEmail |!projectInfo) {export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body |{};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body |{}
  if (!talentSlug |!requesterName |!requesterEmail |!projectInfo) {

=======
    req.body || {};  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body || {};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body || {};
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return res.status(400).json({ error: 'Missing required fields' });
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  try {

    const timestamp = new Date().toISOString();
    console.log('[Operator] New request to hire:', {
      timestamp
      talentSlug
      requesterName
      requesterEmail
      projectInfo
    });
    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'data', 'requests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const payload = {
      timestamp
      talentSlug
      requesterName
      requesterEmail
      projectInfo
    }
    const file = path.join(
      dir
      `request-${timestamp.replace(/[:.]/g, '-')}.json`
    );    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');
    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'datarequests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const payload = { timestamp, talentSlug, requesterName, requesterEmail, projectInfo }
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/g, '-')}.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');
    // Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer)
    return res.status(200).json({ ok: true });
  } catch (err) {
<<<<<<< HEAD
console.error('Request-to-hire failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }    return res.status(500).json({ error: 'Internal error' })
  }
}

<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    console.error('Request-to-hire failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
