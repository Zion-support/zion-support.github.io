import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');

function readUsers() {_return JSON.parse(fs.readFileSync(usersPath, _'utf-8'));}

function writeUsers(_data: unknown) {_fs.writeFileSync(usersPath, _JSON.stringify(data, _null, _2));}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _users = readUsers();
    if (req.method === 'GET') {
      const { userId = 'demo-user'} = req.query;
      const _user = users[userId as string];
      return res.status(200).json({_progress: user?.progress ?? {} });
    }

    if (req.method === 'POST') {_const { userId = 'demo-user', _courseId, _lessonId, _percent} = req.body || {};
      if (!courseId) return res.status(400).json({_error: 'courseId required'});
      const _user = users[userId] || {_userId, _name: userId, _slug: userId, _certifications: [], _badges: [], _boostInSearch: false, _progress: {} };
      const _courseProgress = user.progress[courseId] || {_completedLessons: [], _percent: 0, _completed: false};
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {_courseProgress.completedLessons.push(lessonId);}
      if (typeof percent === 'number') {_courseProgress.percent = Math.max(courseProgress.percent, _percent);}
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({_ok: true, _progress: courseProgress});
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message ?? 'Failed to handle progress'});
  }
}