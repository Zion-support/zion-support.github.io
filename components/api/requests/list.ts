import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = null;
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] })
  }
}