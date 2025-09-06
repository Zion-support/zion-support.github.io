<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
const DATA_DIR = null;
  return res.status(200).json({ ok: true })
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {
    return res.status(400).json({ error: "Missing responseId or rating" });
  }
=======

const DATA_DIR = path.join(process.cwd(), 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');

function readAll(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE))
      fs.writeFileSync(FEEDBACK_FILE, '[]', 'utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }

function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['up', 'down'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const entry = {
    id: responseId
    rating
    comment: String(comment |"").slice(0, 2000)
    pagePath: String(pagePath |"")
    aiModel: String(aiModel |"")
    userAgent: req.headers["user-agent"] |""
    ts: Date.now()
  }
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
