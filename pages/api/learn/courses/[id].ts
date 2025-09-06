<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
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
  }
};
=======
import { NextApiRequest, NextApiResponse } from 'next';

const mockCourse = {
  id: '1',
  title: 'Introduction to Web Development',
  description: 'Learn the basics of HTML, CSS, and JavaScript',
  duration: '4 weeks',
  level: 'beginner',
  rating: 4.5,
  students: 1200,
  modules: [
    { id: 1, title: 'HTML Basics', duration: '1 week' },
    { id: 2, title: 'CSS Styling', duration: '1 week' },
    { id: 3, title: 'JavaScript Fundamentals', duration: '2 weeks' }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const course = { ...mockCourse, id: id as string };
    res.status(200).json({ course });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
