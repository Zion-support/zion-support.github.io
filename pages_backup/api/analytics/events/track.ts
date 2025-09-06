<<<<<<< HEAD:pages/api/analytics/events/track.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const LOG_DIR = path.join(process.cwd(), 'dataanalytics'),
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl'),
<<<<<<< HEAD
=======

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true }),
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/analytics/events/track.ts

import fs from 'fs',;
import path from 'path',;
const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')

<<<<<<< HEAD:pages/api/analytics/events/track.ts
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true })
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/analytics/events/track.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

=======


  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const LOG_DIR = path.join (process.cwd (), 'dataanalytics'),
const LOG_FILE = path.join (LOG_DIR, 'events.log.jsonl'),
/**
 * ensureLogFile - Function description
 */
function ensureLogFile() {
  if () fs.mkdir_sync (LOG_DIR, { recursive: true }), ) {
  $2
}
<<<<<<< HEAD
=======
  if () fs.writeFileSync (LOG_FILE, '')) {
  $2
}
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method Not Allowed' }), ) {
  $2
}
  const { name, page = '', user_type = 'guest', properties = {}, at } = req.body || {},
  if (return res.status (400).json ({ error: 'Invalid event name' }), ) {
  $2
}
  const now_iso = new Date ().toISOString (),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  const nowIso = new Date().toISOString(),
  const event = {
    name,
    page,
    user_type,
    properties,
    at: at && typeof at === 'string' ? at : nowIso,
    ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string},

    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')

<<<<<<< HEAD:pages/api/analytics/events/track.ts
<<<<<<< HEAD
<<<<<<< HEAD

res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
=======
=======
    at: at && typeof at === 'string' ? at : now_iso,
    ua: req.headers['user - agent'] || '',
ip: (req.headers['x - forwarded - for'] || req.socket.remote_address || '') as string},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    ensureLogFile (),
    fs.appendFileSync (LOG_FILE, JSON.stringify (event) + '\n');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/analytics/events/track.ts
  } catch (e) {
    // ignore file errors in serverless;
  }

<<<<<<< HEAD:pages/api/analytics/events/track.ts
<<<<<<< HEAD
<<<<<<< HEAD
import { ensureAdmin } from '../../../utils/auth';

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = await ensureAdmin(req);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
    const nowIso = new Date().toISOString();

    const event = {
      name,
      page,
      userType,
      properties,
      at: at && typeof at === 'string' ? at : nowIso,
      ua: req.headers['user-agent'] || '',
      ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string
    };

    // Add your event tracking logic here

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  res.status(200).json({ ok: true })
}


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.status(200).json({ ok: true })
};
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  res.status(200).json({ ok: true })

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
  res.status(200).json({ ok: true })
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/analytics/events/track.ts

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'events.log');

  const {
    name,
    page = '',
    userType = 'guest',
    properties = {},
    at,
  } = req.body || {};
  if (!name || typeof name !== 'string')
    return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
  const event = {
    name,
    page,
    userType,
    properties,
at: at && typeof at === 'string' ? at : nowIso,
    ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      '') as string,
  };

  const event = req.body;
  
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n');
  } catch (e) {
    // ignore file errors in serverless
  }

  res.status(200).json({ ok: true });
}
<<<<<<< HEAD:pages/api/analytics/events/track.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/analytics/events/track.ts
