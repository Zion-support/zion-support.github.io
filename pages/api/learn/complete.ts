<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed')
  }

  const { userId = 'demo-user', courseId, enableBoost } = req.body || {},
  if (!courseId) return res.status(400).json({ error: 'courseId required' }),

  try {
    const users = readJson(usersPath),
    const courses = readJson(coursesPath),
    const course = courses.find((c: any) => c.id === courseId),
    if (!course) return res.status(404).json({ error: 'Course not found' }),

    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId),
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge),
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost,

    // Mark progress complete
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) },

    users[userId] = user,
    writeJson(usersPath, users),
    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' })
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}