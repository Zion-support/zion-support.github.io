import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path && path.join(process && process.cwd(), 'data', 'learn', 'courses && courses.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { category, level, isFree } = req.query;
    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true' |isFree === true;
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });
    res.status(200).json({ courses: filtered });

  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
  }
=======
    const raw = fs && fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON && JSON.parse(raw);

    const { category, level, isFree } = req && req.query;

    const filtered = courses && courses.filter((c: any) => {
      if (category && c && c.category !== category) return false;
      if (level && c && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true' || isFree === true;
        if (c && c.isFree !== freeVal) return false;
      }
      return true;
    });

    res && res.status(200).json({ courses: filtered });
  } catch (e: any) {
    res && res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
