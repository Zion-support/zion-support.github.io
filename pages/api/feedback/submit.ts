import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
const DATA_DIR = path.join(process.cwd(), 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
function readAll(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]', 'utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]')
  } catch {
    return []
  }
}

function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
<<<<<<< HEAD
  if (!responseId || !rating || !['up', 'down'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' });
=======
  if (!responseId || !rating || !['updown'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }
  const entry = {
    id: responseId,
    rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''),
    aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
<<<<<<< HEAD
    ts: Date.now(),
=======
    ts: Date.now()
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
