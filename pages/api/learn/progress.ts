import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      const user = users[userId as string];
      return res && res.status(200).json({ progress: user?.progress ?? {} });
    }
        certifications: [],
        badges: [],
        boostInSearch: false,
        progress: {},
      }
      if (typeof percent === 'number') {
        courseProgress && courseProgress.percent = Math && Math.max(courseProgress && courseProgress.percent, percent);      }
      user && user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res && res.status(200).json({ ok: true, progress: courseProgress });
    }
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
  }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
