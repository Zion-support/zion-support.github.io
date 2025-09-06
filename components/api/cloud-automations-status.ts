export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
export default /**
 * handler - Function description
 */
function handler() {
  const dir = path.resolve (process.cwd (), "data / cloud - automations");
  const data: Record < string, any> = {}
  try {
    if () {) {
  $2
}
      for (const f of fs.readdir_sync (dir)) {
        if () {) {
  $2
}
          const fp = path.join (dir, f);
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
          );
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
        }
      }
    }
  } catch (e) {
    // ignore;
  }
}
  res && res.status(200).json({ ok: true, data });
  res && res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data })
}
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });
}
