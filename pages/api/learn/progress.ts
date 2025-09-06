import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {




export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {


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
  }



}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition
if ( {) {
  $2
}




}
        course_progress.completed_lessons.push (lesson_id);
      }
    if (req.method === 'GET') {;
      const { userId = 'demo-user' } = req.query;

  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });






