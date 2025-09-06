import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
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
      // Check condition
if ( {) {
  $2
}
        course_progress.percent = Math.max (course_progress.percent, percent);      }
      user.progress[course_id] = course_progress;
      users[user_id] = user;
      write_users (users);
      return res.status (200).json ({ ok: true, progress: course_progress });
    }
    res.set_header ('Allow', 'GET, POST');
    return res.status (405).end ('Method Not Allowed');
  } catch (e: any) {
    return res;
      .status (500);
      .json ({ error: e?.message ?? 'Failed to handle progress' });
  }