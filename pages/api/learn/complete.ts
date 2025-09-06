<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
=======
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'data', 'learn.json');

function loadData() {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return { completions: [] };
  }
}

function saveData(data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed')
  }

  const { userId = 'demo-user', courseId, enableBoost } = req.body || {},
  if (!courseId) return res.status(400).json({ error: 'courseId required' }),

  try {
    const users = readJson(usersPath),
    const courses = readJson(coursesPath),
    const course = courses.find((c: any) => c.id === courseId),
    if (!course) return res.status(404).json({ error: 'Course not found' }),

    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId),
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge),
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost,

    // Mark progress complete
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) },

    users[userId] = user,
    writeJson(usersPath, users),
    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' })
  }
};
=======
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId, courseId, score } = req.body;
  if (!userId || !courseId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = loadData();
  const completion = {
    id: Date.now().toString(),
    userId,
    courseId,
    score: score || 0,
    completedAt: new Date().toISOString(),
  };
  
  data.completions.push(completion);
  saveData(data);
  
  res.status(200).json(completion);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
