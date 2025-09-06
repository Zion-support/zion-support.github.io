import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
<<<<<<< HEAD
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.status(200).json({ course });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' });
  }
=======
    if (!course) return res.status($1).json({$2});
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
