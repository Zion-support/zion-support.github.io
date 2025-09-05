<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  const dir = path.resolve(process.cwd(), 'data/cloud-automations'),;
  const data:Record<string any> = {},;
  try {;
    if (fs.existsSync(dir)) {;
      for (const f of fs.readdirSync(dir)) {;
        if (f.endsWith('.json')) {;
          const fp = path.join(dir, f),;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8')),;
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations'),
  const data: Record<string any> = {},
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f),
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        }
      }
    }
  } catch (e) {;
    // ignore;
  }
<<<<<<< HEAD
  res.status(200).json({ ok:true, data }),;
}
=======
  res.status(200).json({ ok: true, data })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
