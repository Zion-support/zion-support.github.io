import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD

    const users = readUsers()
    if (req.method === 'GET') {
    const users = readUsers(),
    if (req.method === 'GET') {;

      const { userId = 'demo-user' } = req.query;

=======

    const users = readUsers(),
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} });
    }
    if (req.method === 'POST') {
      const {
        userId = 'demo-user'
        courseId
        lessonId
        percent
      } = req.body |{}
      if (!courseId)
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
}



<<<<<<< HEAD
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

  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }


    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}

}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition
if ( {) {
  $2
}




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
