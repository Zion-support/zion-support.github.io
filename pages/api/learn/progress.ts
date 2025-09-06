import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';

      const { userId = 'demo-user' } = req.query;
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const users = readUsers(),
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      const user = users[userId as string];


  }
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
        course_progress.completed_lessons.push (lesson_id);
      }
<<<<<<< HEAD
      const courseProgress = user.progress[courseId] |{
        completedLessons: []
        percent: 0
        completed: false
      }
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {
        courseProgress.percent = Math.max(courseProgress.percent, percent);      }

const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
=======
      // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}



<<<<<<< HEAD
    if (req.method === 'POST') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({ error: 'Course ID required' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false };
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {
        courseProgress.percent = Math.max(courseProgress.percent, percent);
      }

      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }

  }

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
