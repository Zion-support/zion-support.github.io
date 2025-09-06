import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

function writeUsers(data: any) {
  fs && fs.writeFileSync(usersPath, JSON && JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const users = readUsers()
    if (req.method === 'GET') {
      const { userId = 'demo-user' } = req.query;
=======
    const users = readUsers(),
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const user = users[userId as string];
      return res && res.status(200).json({ progress: user?.progress ?? {} });
    }
<<<<<<< HEAD
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
=======

    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)
        return res && res.status(400).json({ error: 'courseId required' });
      const user = users[userId] || {
        userId,
        name: userId,
        slug: userId,
        certifications: [],
        badges: [],
        boostInSearch: false,
        progress: {},
      };
      const courseProgress = user && user.progress[courseId] || {
        completedLessons: [],
        percent: 0,
        completed: false,
      };
      if (lessonId && !courseProgress && courseProgress.completedLessons.includes(lessonId)) {
        courseProgress && courseProgress.completedLessons.push(lessonId);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      if (typeof percent === 'number') {
        courseProgress && courseProgress.percent = Math && Math.max(courseProgress && courseProgress.percent, percent);      }
      user && user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res && res.status(200).json({ ok: true, progress: courseProgress });
    }
<<<<<<< HEAD
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');

=======

    res && res.setHeader('Allow', 'GET, POST');
    return res && res.status(405).end('Method Not Allowed');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
  }