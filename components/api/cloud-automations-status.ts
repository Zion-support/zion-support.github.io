
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}


  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);

  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");

  const data: Record<string, any> = {};
  try {
    if (fs && fs.existsSync(dir)) {
      for (const f of fs && fs.readdirSync(dir)) {
        if (f && f.endsWith(".json")) {
          const fp = path && path.join(dir, f);
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );


          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))



          );
        }
      }
    }
  } catch (e) {
    // ignore;
  }


}
  res.status(200).json({ ok: true, data });


          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8'),
          );
        }
      }
    }

    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}


