import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
    
    if (!fs.existsSync(changelogPath)) {
      return res.status(404).json({ error: 'Changelog not found' });
    }
    
    const changelog = fs.readFileSync(changelogPath, 'utf8');
    res.status(200).json({ changelog });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' });
  }
}