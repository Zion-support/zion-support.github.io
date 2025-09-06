<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

const usersPath = path.join(process.cwd(), 'datalearnusers.json')
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}
function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }
  const { userId = 'demo-user', courseId, enableBoost } = req.body |{}
  if (!courseId) return res.status(400).json({ error: 'courseId required' })
  try {

<<<<<<< HEAD

    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function writeJson(p: string, data: any) {;
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { userId = 'demo-user', courseId, enableBoost } = req.body || {},;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} },;

=======
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId);
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge);
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost;

    // Mark progress complete
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) };

    users[userId] = user;
    writeJson(usersPath, users);

    return res.status(200).json({ ok: true, user })


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
<<<<<<< HEAD
=======

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
