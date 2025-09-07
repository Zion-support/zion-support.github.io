import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query as { id?: string };
    if (!id) {
      return res.status(400).json({ error: 'Course ID required' });
    }

    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const course = courses.find((c: any) => c.id === id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json({ course });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
