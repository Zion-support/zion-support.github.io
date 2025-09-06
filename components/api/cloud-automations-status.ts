import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
<<<<<<< HEAD
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8')
          );
=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      }
    }
  } catch (e) {
    // ignore
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
=======
  res.status(200).json({ ok: true, data })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true, data })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
