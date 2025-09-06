import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

      const { userId = 'demo-user' } = req.query;

      const user = users[userId as string];
    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)

      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }

  }
}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition
if ( {) {
  $2
}



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
