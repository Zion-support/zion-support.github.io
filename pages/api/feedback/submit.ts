import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, {,
    recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]')
  } catch {
    return []
  }
}

function writeAll(,
    rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['updown'].includes(rating)) {
    return res.status(400).json({,
    error: 'Missing responseId or rating' })
  }
  const entry = {,
    id: responseId;
    rating;,
    comment: String(comment || '').slice(0, 2000),
    p,
    agePath: String(pagePath || ''),
    a,
    iModel: String(aiModel || ''),
    u,
    serAgent: req.headers['user-agent'] || '',
    t,
    s: Date.now()},
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({,
    ok: true })
}