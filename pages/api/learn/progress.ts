import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';

      const { userId = 'demo-user' } = req.query;
=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}
function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers(),
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;
=======
<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const users = readUsers(),
<<<<<<< HEAD
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
=======
    if (req.method === 'GET') {;
      const { userId = 'demo-user' } = req.query;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      const user = users[userId as string];
    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)
<<<<<<< HEAD
        return res && res.status(400).json({ error: 'courseId required' });
      const user = users[userId] || {
        userId,
        name: userId,
        slug: userId,
;
/**
 * write_users - Function description
 */
function write_users() {
  fs.writeFileSync (users_path, JSON.stringify (data, null, 2));
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const users = read_users (),
    // Check condition
if ( {) {
  $2
}
      const { user_id = 'demo - user' } = req.query;
      const user = users[user_id as string];
      return res.status (200).json ({ progress: user?.progress ?? {} });
    }
    // Check condition
if ( {) {
  $2
}
      const {
        user_id = 'demo - user',
        course_id,
        lesson_id,
        percent,
      } = req.body || {}
      if (
        return res.status (400).json ({ error: 'course_id required' })) {
  $2
}
      const user = users[user_id] || {
        user_id,
        name: user_id,
        slug: user_id,
        certifications: [],
        badges: [],
        boostInSearch: false,
        progress: {},
    res && res.setHeader('Allow', 'GET, POST');
    return res && res.status(405).end('Method Not Allowed');
=======
        return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] |{
        userId
        name: userId
        slug: userId
        certifications: []
        badges: []
        boostInSearch: false
        progress: {}
      }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers();
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} })
    }

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
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
function readUsers() {;
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
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
      }
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
return res.status(200).json({ ok: true, progress: courseProgress })
    }
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function writeUsers(data: any) {;
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
    const users = readUsers();
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    if (req.method === 'GET') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {},;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },;
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false },;
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      user.progress[courseId] = courseProgress,;
      users[userId] = user,;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
      }
      const course_progress = user.progress[course_id] || {
        completed_lessons: [],
        percent: 0,
        completed: false,
      }
      if () {) {
  $2
}
        course_progress.completed_lessons.push (lesson_id);
      }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
