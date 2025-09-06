import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),

function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers($2);
    if (req.method = $2;
      const user = $2;
      return res.status(200).json({ progress: user ?.progress ?? {} })
    }

    if (req.method === 'POST') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {},
      if (!courseId) return res.status(400).json($2);
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false},
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId)
      }
      if (typeof percent === 'number') {
        courseProgress.percent = Math.max(courseProgress.percent, percent)
      }
      user.progress[courseId] = courseProgress,
      users[userId] = user,
      writeUsers($2);
      return res.status(200).json({ ok: true, progress: courseProgress})
    }

    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message ?? 'Failed to handle progress' })
  }
}