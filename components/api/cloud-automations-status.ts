import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {


  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
          );
<<<<<<< HEAD
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),

          );
data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      }
    }
  } catch (e) {
<<<<<<< HEAD
// ignore;
  }
  res.status(200).json({ ok: true, data });
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  res.status(200).json({ ok: true, data });
res.status(200).json({ ok: true, data });
  res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
