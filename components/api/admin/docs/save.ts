import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'data', 'content.json');
const VERSIONS_DIR = path.join(process.cwd(), 'data', 'versions');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Ensure versions directory exists
    if (!fs.existsSync(VERSIONS_DIR)) {
      fs.mkdirSync(VERSIONS_DIR, { recursive: true });
    }

    const body = req.body;
    const jsonString = typeof body === 'string' ? body : JSON.stringify(body, null, 2);
    const ts = new Date()
      .toISOString()
      .replace(/[-:T.Z]/g, '')
      .slice(0, 14);
    
    fs.writeFileSync(CONTENT_PATH, jsonString, 'utf8');
    fs.writeFileSync(path.join(VERSIONS_DIR, `${ts}.json`), jsonString, 'utf8');
    
    res.status(200).json({ ok: true, version: ts });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' });
  }
}