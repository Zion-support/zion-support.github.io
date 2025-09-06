import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const DATA_DIR = path.join(process.cwd(), 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');

function readAll(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
<<<<<<< HEAD
    if (!fs.existsSync(FEEDBACK_FILE))
      fs.writeFileSync(FEEDBACK_FILE, '[]', 'utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }

function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2));
=======
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]')
  } catch {
    return []
  }
}

function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
<<<<<<< HEAD
  if (!responseId || !rating || !['up', 'down'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' });
  }
  const entry = {
    id: responseId,
    rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''),
    aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
    ts: Date.now(),
  };
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
=======
  if (!responseId || !rating || !['updown'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' })
  }
  const entry = {
    id: responseId, rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''), aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
    ts: Date.now()};
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
