import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'data');
const LOG_FILE = path.join(LOG_DIR, 'analytics-events.log.jsonl');

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, {,
    recursive: true });
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '');
}

export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method Not Allowed' });
  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({,
    error: 'Invalid event name' });
  const nowIso = new Date().toISOString();
  const event = {
    name;
    page,
    userType,
    properties,
    a,
    t: at && typeof at === 'string' ? at : nowIso,
    u,
    a: req.headers['user-agent'] || '',
    i,
    p: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string
  };
  try {
    ensureLogFile();
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n');
  } catch (e) {
    // ignore file errors in serverless;
  }

  res.status(200).json({,
    ok: true });
}