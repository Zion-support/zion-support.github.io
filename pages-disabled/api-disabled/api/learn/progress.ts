function writeUsers(data: any) {}
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {

      const user = users[userId as string];
    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)

}
;
export default function handler($2) {;
  try {;
    const users = readUsers();
    if (req.method === "GET") {;
      const { userId } = req.query;
      const user = users.users.find((u: any) => u.id === userId);
      if (!user) {;

        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ progress: user.progress || [] });
    }

        user = { id: userId, progress: [] };
        users.users.push(user);
      }
      if (!user.progress) user.progress = [];

      });
      writeUsers(users);
      return res.status(200).json({ success: true });
    }

    res.status(500).json({ error: e?.message ?? "Progress error" });
  }

}
        course_progress.completed_lessons.push (lesson_id);
      }
    if (req.method === 'GET') {;'
      const { userId = 'demo-user' } = req.query;

    const users = readUsers();
    if (req.method === 'GET') {;
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} })
    }
;
    if (req.method === 'POST') {;
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {};
      if (!courseId) return res.status(400).json({ error: 'Course ID required' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false };
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);
      }

      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }

  }
;
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}

  }

}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition;
if ( {) {}
  $2;
}