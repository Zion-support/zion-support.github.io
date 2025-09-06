import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const dataPath = null;
    res.status(200).json({ courses: filtered })
=======
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { category, level, isFree } = req.query;
    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
<<<<<<< HEAD
        const freeVal = isFree === 'true' |isFree === true;
=======
        const freeVal = isFree === 'true' || isFree === true;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });
    res.status(200).json({ courses: filtered });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
<<<<<<< HEAD
  }
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
