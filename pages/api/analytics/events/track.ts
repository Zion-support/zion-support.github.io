

  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
<<<<<<< HEAD
const LOG_DIR = path.join(process.cwd(), 'dataanalytics');
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl');
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const LOG_DIR = path.join(process.cwd(), 'dataanalytics'),
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl'),

const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')
function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const nowIso = new Date().toISOString();
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const event = {
    name,
    page,
    user_type,
    properties,

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    at: at && typeof at === 'string' ? at : now_iso,
    ua: req.headers['user - agent'] || '',
ip: (req.headers['x - forwarded - for'] || req.socket.remote_address || '') as string},
  try {
<<<<<<< HEAD
<<<<<<< HEAD
res.status (200).json ({ ok: true });
}
;


    ensureLogFile()
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless;
  }
res.status(200).json({ ok: true })
}


res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin } from '../../../utils/auth';

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
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ensureLogFile (),
    fs.appendFileSync (LOG_FILE, JSON.stringify (event) + '\n');

  } catch (e) {
    // ignore file errors in serverless;
  }


  res.status(200).json({ ok: true })
}

=======
res.status (200).json ({ ok: true });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
