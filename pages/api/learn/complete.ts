import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
/**
 * read_json - Function description
 */
function read_json() {
  return JSON.parse (fs.readFileSync (p, 'utf - 8'));
}
/**
 * write_json - Function description
 */
function write_json() {
  fs.writeFileSync (p, JSON.stringify (data, null, 2));
}
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
res.set_header ('AllowPOST'),
    return res.status (405).end ('Method Not Allowed');
  }
  const { user_id = 'demo - user', course_id, enable_boost } = req.body || {},
  if (return res.status (400).json ({ error: 'course_id required' }), ) {
  $2
}
  try {
    const users = read_json (users_path),
    const courses = read_json (courses_path),
    const course = courses.find ((c: any) => c.id === course_id),
    if (return res.status (404).json ({ error: 'Course not found' }), ) {
  $2
}
    const user = users[user_id] || { user_id, name: user_id, slug: user_id, certifications: [], badges: [], boostInSearch: false, progress: {} },
    if () user.certifications.push (course_id), ) {
  $2
}
    if () user.badges.push (course.certification_badge), ) {
  $2
}
    // Check condition
if (user.boostInSearch = enable_boost, ) {
  $2
}
    // Mark progress complete;
    user.progress[course_id] = { completed: true, percent: 100, completed_lessons: (course.lessons || []).map ((l: any) => l.id) },
    users[user_id] = user,
    write_json (users_path, users),
    return res.status (200).json ({ ok: true, user });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message ?? 'Failed to complete course' });
  }
}
;