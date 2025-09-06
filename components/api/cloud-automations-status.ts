import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
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
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8')
          );
=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }
      }
    }
  } catch (e) {
    // ignore
  }
  res.status(200).json({ ok: true, data });
=======
  res.status(200).json({ ok: true, data })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
