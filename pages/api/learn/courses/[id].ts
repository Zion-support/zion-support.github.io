<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8'),
    const courses = JSON.parse(raw),
    const { id } = req.query,
    const course = courses.find((c: any) => c.id === id),
    if (!course) return res.status(404).json({ error: 'Course not found' }),
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _raw = fs.readFileSync(dataPath, _'utf-8');
    const _courses = JSON.parse(raw);
    const { id} = req.query;
    const _course = courses.find(_(c: unknown) => c.id === id);
    if (!course) return res.status(404).json({_error: 'Course not found'});
    res.status(200).json({_course});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message ?? 'Failed to load course'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}