import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const dir = path.join(process.cwd(), 'data', 'automations');
  const data: Record<string, any> = {};

  try {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      for (const f of files) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'));
        }
      }
    }
  } catch (e) {
    // ignore
  }

  res.status(200).json({ ok: true, data });
}