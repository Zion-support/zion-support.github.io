import type { NextApiRequest, NextApiResponse } from 'next';


      const user = users[userId as string];
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


  }

}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition
if ( {) {
  $2
}


}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

