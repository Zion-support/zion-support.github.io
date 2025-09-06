import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const raw = fs.readFileSync(dataPath, 'utf-8')
    const courses = JSON.parse(raw)
    const { id } = req.query
    const course = courses.find((c: any) => c.id === id)
    if (!course) return res.status(404).json({ error: 'Course not found' })

=======
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
