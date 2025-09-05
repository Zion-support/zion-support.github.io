import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const {_talentSlug, _requesterName, _requesterEmail, _projectInfo} = req.body || {};
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {_return res.status(400).json({ error: 'Missing required fields'});
  }

  try {_const _timestamp = new Date().toISOString();
    

    // Persist to data/requests as a simple CMS-like log
    const _dir = path.join(process.cwd(), _'data', _'requests');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
    const _payload = {_timestamp, _talentSlug, _requesterName, _requesterEmail, _projectInfo};
    const _file = path.join(dir, `request-${_timestamp.replace(/[:.]/g, _'-')}.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2), 'utf8');

    // Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer)

    return res.status(200).json({_ok: true});
  } catch (err) {_return res.status(500).json({ error: 'Internal error'});
  }
}