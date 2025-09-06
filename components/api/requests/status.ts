import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {},
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });
  const items = null;
  res.status(200).json({ ok: true })
}
