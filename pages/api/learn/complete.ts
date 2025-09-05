import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
const _coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

function readJson(_p: string) {_return JSON.parse(fs.readFileSync(p, _'utf-8'));}

function writeJson(_p: string, _data: unknown) {_fs.writeFileSync(p, _JSON.stringify(data, _null, _2));}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).end('Method Not Allowed');}

  const {_userId = 'demo-user', _courseId, _enableBoost} = req.body || {};
  if (!courseId) return res.status(400).json({_error: 'courseId required'});

  try {_const _users = readJson(usersPath);
    const _courses = readJson(coursesPath);
    const _course = courses.find(_(c: unknown) => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found'});

    const _user = users[userId] || {_userId, _name: userId, _slug: userId, _certifications: [], _badges: [], _boostInSearch: false, _progress: {} };
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId);
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge);
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost;

    // Mark progress complete
    user.progress[courseId] = {_completed: true, _percent: 100, _completedLessons: (course.lessons || []).map(_(l: unknown) => l.id)};

    users[userId] = user;
    writeJson(usersPath, users);
    return res.status(200).json({_ok: true, _user});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message ?? 'Failed to complete course'});
  }
}