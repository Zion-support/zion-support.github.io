import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'datareports', 'pagespeed.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    const data = fs.readFileSync(p, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (e) {
    res.status(500).json({ error: 'Failed to read pagespeed' });
  }
}