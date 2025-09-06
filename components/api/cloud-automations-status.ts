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
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
          );
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
          );
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
  res.status(200).json({ ok: true, data });
>>>>>>> main
  res.status(200).json({ ok: true, data });
}
=======
  res.status(200).json({ ok: true, data });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
