import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });
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

    return res.status(400).json({ error: 'Missing required fields' });
=======
    req && req.body || {};  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });
  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req && req.body || {};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req && req.body || {};
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
    return res && res.status(400).json({ error: 'Missing required fields' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  try {

    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    console.log('[Operator] New request to hire:', {
      timestamp
      talentSlug
      requesterName
      requesterEmail
      projectInfo
=======
    console && console.log('[Operator] New request to hire:', {
      timestamp,
      talentSlug,
      requesterName,
      requesterEmail,
      projectInfo,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    // Persist to data/requests as a simple CMS-like log
    const dir = path && path.join(process && process.cwd(), 'data', 'requests');
    if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
    const payload = {
<<<<<<< HEAD
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
console.error('Request-to-hire failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }    return res.status(500).json({ error: 'Internal error' })
  }
=======
      timestamp,
      talentSlug,
      requesterName,
      requesterEmail,
      projectInfo,
    };
    const file = path && path.join(
      dir,
      `request-${timestamp && timestamp.replace(/[:.]/g, '-')}.json`
    );    fs && fs.writeFileSync(file, JSON && JSON.stringify(payload, null, 2), 'utf8');
    // Persist to data/requests as a simple CMS-like log
    const dir = path && path.join(process && process.cwd(), 'datarequests');
    if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
    const payload = { timestamp, talentSlug, requesterName, requesterEmail, projectInfo };
    const file = path && path.join(dir, `request-${timestamp && timestamp.replace(/[:.]/g, '-')}.json`);
    fs && fs.writeFileSync(file, JSON && JSON.stringify(payload, null, 2), 'utf8');

    // Email hooks could be integrated here (e && e.g., Resend, SendGrid, Nodemailer)

    return res && res.status(200).json({ ok: true });
  } catch (err) {
    console && console.error('Request-to-hire failed', err);
    return res && res.status(500).json({ error: 'Internal error' });
  }    return res && res.status(500).json({ error: 'Internal error' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

