<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
const p = path.join(process.cwd(), 'datareports', 'depsweekly-dependencies.json'),;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  try {;
    if (!fs.existsSync(p)) return res.status(200).json({}),;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8'))),;
  } catch (e:any) {;
    res.status(500).json({ error:e?.message || 'Failed to read deps report' }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json'),

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({}),
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}