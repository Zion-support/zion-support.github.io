<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8')
          );
        }
      }
    }
  } catch (e) {
    // ignore
  }
  res.status(200).json({ ok: true, data });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
