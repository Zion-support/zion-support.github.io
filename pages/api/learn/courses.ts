<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
const dataPath = path.join(process.cwd(), 'datalearn', 'courses.json'),;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8'),;
    const courses = JSON.parse(raw),;
;
    const { category, level, isFree } = req.query,;
;
    const filtered = courses.filter((c:any) => {;
      if (category && c.category !== category) return false,;
      if (level && c.level !== level) return false,;
      if (typeof isFree !== 'undefined') {;
        const freeVal = isFree === 'true' || isFree === true,;
        if (c.isFree !== freeVal) return false;
      }
      return true,;
    }),;
;
    res.status(200).json({ courses:filtered }),;
  } catch (e:any) {;
    res.status(500).json({ error:e?.message ?? 'Failed to load courses' }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const { category, level, isFree } = req.query,

    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false,
      if (level && c.level !== level) return false,
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true' || isFree === true,
        if (c.isFree !== freeVal) return false
      }
      return true
    }),

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}