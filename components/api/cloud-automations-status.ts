import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
          );
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
          );
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8')
          );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
      }
    }
  } catch (e) {
    // ignore
  }
  res.status(200).json({ ok: true, data });
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
