import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body |{};  if (!talentSlug |!requesterName |!requesterEmail |!projectInfo) {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
<<<<<<< HEAD

  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body || {};
=======
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
=======
  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body |{};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body |{}
  if (!talentSlug |!requesterName |!requesterEmail |!projectInfo) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
  }
  try {
<<<<<<< HEAD
    const timestamp = null;
    return res.status(500).json({ error: 'Internal error' })
  }
}
=======
=======
 
}

  try {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
    );    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');
    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'datarequests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const payload = { timestamp, talentSlug, requesterName, requesterEmail, projectInfo }
    const file = path.join(dir, `request-${timestamp.replace(/[:.]/g, '-')}.json`);
=======
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');
    // Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer)
    return res.status(200).json({ ok: true });
<<<<<<< HEAD
  } catch (err) {
console.error('Request-to-hire failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }    return res.status(500).json({ error: 'Internal error' })
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
 
} catch (err) {
    console.error('Request-to-hire failed', err);
    return res.status(500).json({ error: 'Internal error' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
