<<<<<<< HEAD
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
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _raw = fs.readFileSync(dataPath, _'utf-8');
    const _courses = JSON.parse(raw);

    const { category, _level, _isFree} = req.query;

    const _filtered = courses.filter(_(c: unknown) => {_if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const _freeVal = isFree === 'true' || isFree === true;
        if (c.isFree !== freeVal) return false;}
      return true;
    });

    res.status(200).json({_courses: filtered});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message ?? 'Failed to load courses'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}