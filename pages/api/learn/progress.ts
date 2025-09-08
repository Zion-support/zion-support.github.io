import type { NextApiRequest, NextApiResponse } from 'next';

function writeUsers(,
    data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  try {
    const users = readUsers();
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({,
    progress: user?.progress ?? {} })
    }

    if (req.method === 'POST') {
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({,
    error: 'courseId required' });
      const user = users[userId] || { userId, n,
    ame: userId, s,
    lug: userId, c,
    ertifications: [], b,
    adges: [], b,
    oostInSearch: false, p,
    rogress: {} },
      const courseProgress = user.progress[courseId] || {,
    completedLessons: [], p,
    ercent: 0, c,
    ompleted: false },
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {
        courseProgress.completedLessons.push(lessonId)
      }
      if (typeof percent === 'number') {
        courseProgress.percent = Math.max(courseProgress.percent, percent)
      }
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({,
    ok: true, p,
    rogress: courseProgress })
    }

    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (,
    e: any) {
    return res.status(500).json({,
    error: e?.message ?? 'Failed to handle progress' })
  }
}