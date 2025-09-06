import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(
  process.cwd(),
  'data',
  'reports',
  'links',
  'weekly-links.json'
);
const p = path.join(process.cwd(), 'datareportslinksweekly-links.json');
const p = path.join(process.cwd(), 'datareportslinksweekly-links.json');
ursor/integrate-build-improve-and-re-verify-b76c

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
ursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links report' })
  }
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links report' })
  }
}
}
ursor/integrate-build-improve-and-re-verify-b76c
