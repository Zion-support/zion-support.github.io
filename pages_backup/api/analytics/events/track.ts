import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs',;
import path from 'path',;
const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true })
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const LOG_DIR = path.join (process.cwd (), 'dataanalytics')
const LOG_FILE = path.join (LOG_DIR, 'events.log.jsonl')
/**
 * ensureLogFile - Function description
 */
function ensureLogFile() {
  if () fs.mkdir_sync (LOG_DIR, { recursive: true }), ) {
  $2
}

  const nowIso = new Date().toISOString()
  const event = {
    name
    page
    user_type
    properties
    at: at && typeof at === 'string' ? at : nowIso
    ua: req.headers['user-agent'] || ''
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string}


    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')

  } catch (e) {
    // ignore file errors in serverless;
  }

  res.status(200).json({ ok: true })
};


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
origin/cursor/automate-test-improve-and-merge-code-2533
