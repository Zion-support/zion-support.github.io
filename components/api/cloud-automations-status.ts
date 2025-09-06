import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8')
          );
=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }
      }
    }
  } catch (e) {
    // ignore
  }
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
=======
  res.status(200).json({ ok: true, data })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
