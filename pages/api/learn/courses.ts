import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync($2);
    const courses = JSON.parse($2);
    const { category, level, isFree } = req.query,

    const filtered = $2;
      if (level && c.level !== level) return false,
      if (typeof isFree !== 'undefined') {
        const freeVal = $2;
        if (c.isFree !== freeVal) return false
      }
      return true
    }),

    res.status(200).json({ courses: filtered})
  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to load courses' })
  }
}