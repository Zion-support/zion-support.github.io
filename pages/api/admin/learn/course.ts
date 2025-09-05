<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const body = req.body || {},
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const existingIndex = courses.findIndex((c: any) => c.id === body.id),
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {
      courses.push(body)
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2)),
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).end('Method Not Allowed');}

  try {_const _body = req.body || {};
    const _raw = fs.readFileSync(coursesPath, 'utf-8');
    const _courses = JSON.parse(raw);

    const _existingIndex = courses.findIndex(_(c: unknown) => c.id === body.id);
    if (existingIndex >= 0) {_courses[existingIndex] = { ...courses[existingIndex], _...body};
    } else {_courses.push(body);}

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(200).json({_ok: true, _course: body});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message ?? 'Failed to save course'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}