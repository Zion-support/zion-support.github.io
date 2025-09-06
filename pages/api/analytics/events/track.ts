import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
const LOG_DIR = path.join(process.cwd(), 'dataanalytics');
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')
function ensureLogFile() {
<<<<<<< HEAD
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true })
=======
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { name, page = '', userType = 'guest', properties = {}, at } = req.body |{}
  if (!name |typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' })
  const nowIso = new Date().toISOString()
  const event = {
    name
    page
    userType
    properties
    at: at && typeof at === 'string' ? at : nowIso
    ua: req.headers['user-agent'] |''
ip: (req.headers['x-forwarded-for'] |req.socket.remoteAddress |'') as string}
  try {
    ensureLogFile()
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
  const event = {
    name,
    page,
    userType,
    properties,
    at: at && typeof at === 'string' ? at : nowIso, ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string};

  try {
    ensureLogFile();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless
  }
<<<<<<< HEAD
res.status(200).json({ ok: true })
}

=======

  res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
