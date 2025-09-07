<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
=======
import { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";
"
const usersPath = path.join(process.cwd(), "data", "users.json");

function readUsers() {}
  try {"
    return JSON.parse(fs.readFileSync(usersPath, "utf8"));
  } catch {}
    return { users: [] };
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts

function writeUsers(data: any) {}
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers()
    if (req.method === 'GET') {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD

    const users = readUsers(),
<<<<<<< HEAD
    if (req && req.method === 'GET') {
      const { userId = 'demo-user' } = req && req.query;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const user = users[userId as string];
    if (req && req.method === 'POST') {
      const {
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)
<<<<<<< HEAD

      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }
=======
  }



=======
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
;
const usersPath = path.join(process.cwd(), "data", "users.json");
;
function readUsers() {;
  try {;
    return JSON.parse(fs.readFileSync(usersPath, "utf8"));
  } catch {;
    return { users: [] };
  }
}
;
function writeUsers(data: any) {;
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
;
export default function handler($2) {;
  try {;
    const users = readUsers();
    if (req.method === "GET") {;
      const { userId } = req.query;
      const user = users.users.find((u: any) => u.id === userId);
      if (!user) {;
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {};
    const users = readUsers();"
    if (req.method === "GET") {}
      const { userId } = req.query;
      const user = users.users.find((u: any) => u.id === userId);
      if (!user) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ progress: user.progress || [] });
    }
<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
;
    if (req.method === "POST") {;
      const { userId, courseId, progress } = req.body;
      let user = users.users.find((u: any) => u.id === userId);
      if (!user) {;
=======
"
    if (req.method === "POST") {}
      const { userId, courseId, progress } = req.body;
      let user = users.users.find((u: any) => u.id === userId);
      if (!user) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
        user = { id: userId, progress: [] };
        users.users.push(user);
      }
      if (!user.progress) user.progress = [];
<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
      user.progress.push({;
        courseId;
        progress;
        updatedAt: new Date().toISOString()
=======
      user.progress.push({}
        courseId,
        progress,
        updatedAt: new Date().toISOString(),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
      });
      writeUsers(users);
      return res.status(200).json({ success: true });
    }
<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
;
    res.setHeader("Allow", "GET, POST");
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {;
=======
"
    res.setHeader("Allow", "GET, POST");"
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
    res.status(500).json({ error: e?.message ?? "Progress error" });
  }





}
        course_progress.completed_lessons.push (lesson_id);
      }
    if (req.method === 'GET') {;'
      const { userId = 'demo-user' } = req.query;
<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
      const user = users[userId as string];
    if (req && req.method === 'POST') {;
      const {;
        userId = 'demo-user';
        courseId;
        lessonId;
        percent
      } = req && req.body || {};
      if (!courseId);
        return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] |{;
        userId;
        name: userId;
        slug: userId;
        certifications: [];
        badges: [];
        boostInSearch: false;
        progress: {}
      }
      const courseProgress = user.progress[courseId] |{;
        completedLessons: [];
        percent: 0;
        completed: false
      }
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
      }
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);      }
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
function readUsers() {;
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
}
;
function writeUsers(data: any) {;
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2))
}
<<<<<<< HEAD:pages/api/learn/progress.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
=======
;
export default function handler($2) {;
  try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/learn/progress.ts
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
=======




      const user = users[userId as string];'
    if (req && req.method === 'POST') {}
      const {'
        userId = 'demo-user',
        courseId,
        lessonId,
        percent,
      } = req && req.body || {};
      if (!courseId)

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
      user.progress[courseId] = courseProgress;
      users[userId] = user;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
    }
<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');

  } catch (e: any) {;
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to handle progress' });
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
function readUsers() {;
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function writeUsers(data: any) {;
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler($2) {;
  try {;
    const users = readUsers();
    if (req.method === 'GET') {;
      const { userId = 'demo-user' } = req.query;
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} });
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    if (req.method === 'GET') {;
      const { userId = 'demo-user', courseId, lessonId, percent } = req.body || {},;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },;
      const courseProgress = user.progress[courseId] || { completedLessons: [], percent: 0, completed: false },;
      if (lessonId && !courseProgress.completedLessons.includes(lessonId)) {;
        courseProgress.completedLessons.push(lessonId);
        } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      if (typeof percent === 'number') {;
        courseProgress.percent = Math.max(courseProgress.percent, percent);
        } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      user.progress[courseId] = courseProgress,;
      users[userId] = user,;
      writeUsers(users);
      return res.status(200).json({ ok: true, progress: courseProgress });
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {;
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
;
    res.setHeader('AllowGET, POST');
    return res.status(405).end('Method Not Allowed')
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message ?? 'Failed to handle progress' })
  }
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

}
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api/learn/progress.ts
=======
=======
'
    res.setHeader('Allow', 'GET, POST');'
    return res.status(405).end('Method Not Allowed');


  } catch (e: any) {}
    return res;
      .status(500)'
      .json({ error: e?.message ?? 'Failed to handle progress' });


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts


  }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
        course_progress.completed_lessons.push (lesson_id);
      }
      // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
=======


}
}

<<<<<<< HEAD:pages/api-disabled/api/learn/progress.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/learn/progress.ts
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/learn/progress.ts
