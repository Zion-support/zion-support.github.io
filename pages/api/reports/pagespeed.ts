import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(,
    _req: NextApiRequest, r,
    es: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (,
    e: any) {
    res.status(500).json({,
    error: e?.message || 'Failed to read PageSpeed report' })
  }
}