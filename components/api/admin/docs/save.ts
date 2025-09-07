import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DOCS_DIR = path.join(process.cwd(), 'datadocs'),
const CONTENT_PATH = path.join($2);
const VERSIONS_DIR = path.join($2);
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true})
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const token = $2;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  try {
    ensureDir($2);
    ensureDir($2);
    const body = $2;
    const jsonString = typeof body === 'string' ? body : JSON.stringify($2);
    const ts = new Date()
      .toISOString()
      .replace(/[-:T.Z]/g, '')
      .slice($2);
    fs.writeFileSync($2);
    fs.writeFileSync(path.join(VERSIONS_DIR, `${ts}.json`), jsonString, 'utf8'),

    res.status(200).json({ ok: true, version: ts})
  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' })
  }
}