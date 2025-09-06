import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

    return res.status(400).json({ error: 'Missing required fields' });
  }

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
