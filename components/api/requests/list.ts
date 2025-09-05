<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8'),;
    const items = JSON.parse(raw),;
    res.status(200).json({ items }),;
  } catch {;
    res.status(200).json({ items:[] }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8'),
    const items = JSON.parse(raw),
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}