<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),

          );
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          );
<<<<<<< HEAD

=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
    }
  } catch (e) {
    // ignore;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
=======
res.status(200).json({ ok: true, data });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.status(200).json({ ok: true, data });
}
=======
  res.status(200).json({ ok: true, data });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  res.status(200).json({ ok: true, data });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
