<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { category, level, isFree } = req.query as { category?: string; level?: string; isFree?: string };

    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true';
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });

    res.status(200).json({ courses: filtered });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}