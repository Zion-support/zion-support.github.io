:pages/api-disabled/api/learn/progress.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

function writeUsers(data: any) {}
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {

:pages/api-disabled/api/learn/progress.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
const users = readUsers(),
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;
      const user = users[userId as string];
    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)
user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }
}
;
export default function handler($2) {;
  try {;
    const users = readUsers();
    if (req.method === "GET") {;
      const { userId } = req.query;
      const user = users.users.find((u: any) => u.id === userId);
      if (!user) {;
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ progress: user.progress || [] });
    }
:pages/api-disabled/api/learn/progress.ts
;
    if (req.method === "POST") {;
      const { userId, courseId, progress } = req.body;
      let user = users.users.find((u: any) => u.id === userId);
      if (!user) {;
        user = { id: userId, progress: [] };
        users.users.push(user);
      }
      if (!user.progress) user.progress = [];
:pages/api-disabled/api/learn/progress.ts
      user.progress.push({;
        courseId;
        progress;
        updatedAt: new Date().toISOString()
      });
      writeUsers(users);
      return res.status(200).json({ success: true });
    }
:pages/api-disabled/api/learn/progress.ts
;
    res.setHeader("Allow", "GET, POST");
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {;
    res.status(500).json({ error: e?.message ?? "Progress error" });
  }

}
        course_progress.completed_lessons.push (lesson_id);
      }
    if (req.method === 'GET') {;'
      const { userId = 'demo-user' } = req.query;
:pages/api-disabled/api/learn/progress.ts
      const user = users[userId as string];
    if (req && req.method === 'POST') {;
      const {;
        userId = 'demo-user';
        courseId;
        lessonId;
        percent
      } = req && req.body || {};
      if (!courseId);
        return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] |{;
        userId;
        name: userId;
        slug: userId;
        certifications: [];
        badges: [];
        boostInSearch: false;
        progress: {}
      }
      const courseProgress = user.progress[courseId] |{;
        completedLessons: [];
        percent: 0;
        completed: false
      }
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);      }
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {;
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}
;
function writeUsers(data: any) {;
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers();
    if (req.method === 'GET') {;
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} })
    }
;
    if (req.method === 'POST') {;
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({ error: 'Course ID required' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false };
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);
      }
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }
:pages/api-disabled/api/learn/progress.ts
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');

  } catch (e: any) {;
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
function readUsers() {;
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}
:pages/api/learn/progress.ts

  }

}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition;
if ( {) {}
  $2;
}


'"
