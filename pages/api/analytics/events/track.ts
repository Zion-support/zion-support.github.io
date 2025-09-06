import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const LOG_FILE = path.join(process.cwd(), 'data', 'analytics', 'events.log.jsonl');

if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { event, page, userType, properties } = req.body || {};
  if (!event) {
    return res.status(400).json({ error: 'Missing event' });
  }

  try {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      page,
      userType: userType || 'guest',
      properties: properties || {},
    };

    fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + '\n');
    return res.status(200).json({ success: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Failed to track event' });
  }
}