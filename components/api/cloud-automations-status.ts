<<<<<<< HEAD

=======
>>>>>>> origin/main
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))

=======


  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}


  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
          );
  const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
origin/cursor/automate-test-improve-and-merge-code-2533

const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> origin/main
        }
      }
    }
  } catch (e) {


    // ignore
  }
res.status(200).json({ ok: true, data });
origin/cursor/automate-test-improve-and-merge-code-2533
}
    // ignore}
  }
res.status(200).json({ ok: true, data });

