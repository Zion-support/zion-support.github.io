import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const usersPath = null;
    return res.status(405).end('Method Not Allowed')
=======
function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
=======

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} });
<<<<<<< HEAD
    }
=======
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (req.method === 'POST') {
      const {
        userId = 'demo-user'
        courseId
        lessonId
        percent
      } = req.body |{}
      if (!courseId)
        return res.status(400).json({ error: 'courseId required' });
<<<<<<< HEAD
      const user = users[userId] |{
        userId
        name: userId
        slug: userId
        certifications: []
        badges: []
        boostInSearch: false
        progress: {}
      }
      const courseProgress = user.progress[courseId] |{
        completedLessons: []
        percent: 0
        completed: false
      }
=======
      
}

const user = users[userId] || {
        userId,
        name: userId,
        slug: userId,
        certifications: [],
        badges: [],
        boostInSearch: false,
        progress: {},
      };
      const courseProgress = user.progress[courseId] || {
        completedLessons: [],
        percent: 0,
        completed: false,
      };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {
<<<<<<< HEAD
        courseProgress.percent = Math.max(courseProgress.percent, percent);      }
=======
        courseProgress.percent = Math.max(courseProgress.percent, percent);
      }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
<<<<<<< HEAD
    }
=======
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
<<<<<<< HEAD
  }
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
