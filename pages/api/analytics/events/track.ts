import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'events.log');

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid event name' });
  }

  const nowIso = new Date().toISOString();
  const event = {
    name,
    page,
    userType,
    properties,
    timestamp: at || nowIso,
    createdAt: nowIso
  };

  try {
    ensureLogFile();
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error logging event:', error);
    res.status(500).json({ error: 'Failed to log event' });
  }
}