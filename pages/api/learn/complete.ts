import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

function readJson(p: string) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch {
    return [];
  }
}

function writeJson(p: string, data: any) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, courseId } = req.body || {};
    if (!userId || !courseId) {
      return res.status(400).json({ error: 'Missing userId or courseId' });
    }

    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    
    const course = courses.find((c: any) => c.id === courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const user = users.find((u: any) => u.id === userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

    // Mark course as completed
    if (!user.completedCourses) {
      user.completedCourses = [];
    }
    
    if (!user.completedCourses.includes(courseId)) {
      user.completedCourses.push(courseId);
      user.completedAt = user.completedAt || {};
      user.completedAt[courseId] = new Date().toISOString();
    }

    writeJson(usersPath, users);
    res.status(200).json({ success: true, completedCourses: user.completedCourses });
  } catch (error) {
    console.error('Error completing course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}