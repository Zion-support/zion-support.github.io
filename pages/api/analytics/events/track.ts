<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

const LOG_DIR = path.join(process.cwd(), 'data', 'analytics');
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const LOG_DIR = path.join(process.cwd(), 'dataanalytics');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl');

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
<<<<<<< HEAD
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });

  const {
    name,
    page = '',
    userType = 'guest',
    properties = {},
    at,
  } = req.body || {};
  if (!name || typeof name !== 'string')
    return res.status(400).json({ error: 'Invalid event name' });
=======
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const nowIso = new Date().toISOString();
  const event = {
    name,
    page,
    userType,
    properties,
<<<<<<< HEAD
    at: at && typeof at === 'string' ? at : nowIso,
    ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      '') as string,
  };

  try {
    ensureLogFile();
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n');
=======
    at: at && typeof at === 'string' ? at : nowIso, ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string};

  try {
    ensureLogFile();
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  } catch (e) {
    // ignore file errors in serverless
  }

<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
