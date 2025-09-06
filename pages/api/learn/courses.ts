import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
<<<<<<< HEAD
    const { category, level, isFree } = req.query;
=======

    const { category, level, isFree } = req.query;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
<<<<<<< HEAD
        const freeVal = isFree === 'true' |isFree === true;
=======
        const freeVal = isFree === 'true' || isFree === true;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });
<<<<<<< HEAD
    res.status(200).json({ courses: filtered });

=======

    res.status(200).json({ courses: filtered });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
  }