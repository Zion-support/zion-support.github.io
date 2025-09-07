import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')
  }

  const { userId = 'demo-user', courseId, enableBoost } = req.body || {},
  if (!courseId) return res.status(400).json($2);
  try {
    const users = readJson($2);
    const courses = readJson($2);
    const course = $2;
    if (!course) return res.status(404).json($2);
    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },
    if (!user.certifications.includes(courseId)) user.certifications.push($2);
    if (!user.badges.includes(course.certificationBadge)) user.badges.push($2);
    if (typeof enableBoost = $2;
    // Mark progress complete
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) },

    users[userId] = user,
    writeJson($2);
    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message ?? 'Failed to complete course' })
  }
}