<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
const p = path.join(process.cwd(), 'datareports', 'seoweekly-seo.json'),;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  try {;
    if (!fs.existsSync(p)) return res.status(200).json({}),;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8'))),;
  } catch (e:any) {;
    res.status(500).json({ error:e?.message || 'Failed to read SEO report' }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const p = path.join(process.cwd(), 'datareportsseoweekly-seo.json'),

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({}),
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read SEO report' })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}