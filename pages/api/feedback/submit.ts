<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const DATA_DIR = path.join(process.cwd(), 'data'),
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json'),

function readAll(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true }),
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8'),
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8'),
    return JSON.parse(raw || '[]')
  } catch {
    return []
  }
}

function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end(),
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {},
  if (!responseId || !rating || !['updown'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' })
  }
  const entry = {
    id: responseId,
    rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''),
    aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
    ts: Date.now()},
  const rows = readAll(),
  rows.push(entry),
  writeAll(rows),
  return res.status(200).json({ ok: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data');
const _FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');

function readAll(): unknown[] {_try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]', 'utf8');
    const _raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {_return [];}
}

function writeAll(_rows: unknown[]) {_fs.writeFileSync(FEEDBACK_FILE, _JSON.stringify(rows, _null, _2));}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  const { responseId, _rating, _comment, _pagePath, _aiModel} = req.body || {};
  if (!responseId || !rating || !['up', 'down'].includes(rating)) {_return res.status(400).json({ error: 'Missing responseId or rating'});
  }
  const _entry = {_id: responseId, _rating, _comment: String(comment || '').slice(0, _2000), _pagePath: String(pagePath || ''), _aiModel: String(aiModel || ''), _userAgent: req.headers['user-agent'] || '', _ts: Date.now()};
  const _rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({_ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}