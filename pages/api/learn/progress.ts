import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
=======
const usersPath = path.join(process.cwd(), 'datalearnusers.json');

function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const usersPath = path.join(process.cwd(), 'datalearnusers.json');

function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers();
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json({ progress: user?.progress ?? {} });
=======
      return res.status(200).json({ progress: user?.progress ?? {} })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    if (req.method === 'POST') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false };
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId)
      }
      if (typeof percent === 'number') {
<<<<<<< HEAD
        courseProgress.percent = Math.max(courseProgress.percent, percent);
=======
      return res.status(200).json({ progress: user?.progress ?? {} })
    }

    if (req.method === 'POST') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false };
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId)
      }
      if (typeof percent === 'number') {
        courseProgress.percent = Math.max(courseProgress.percent, percent)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        courseProgress.percent = Math.max(courseProgress.percent, percent)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json({ ok: true, progress: courseProgress });
=======
      return res.status(200).json({ ok: true, progress: courseProgress })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
<<<<<<< HEAD
=======
      return res.status(200).json({ ok: true, progress: courseProgress })
    }

    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
