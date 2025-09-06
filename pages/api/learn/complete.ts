<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;
<<<<<<< HEAD
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),


=======
const usersPath = path.join(process.cwd(), 'datalearnusers.json')
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

const usersPath = path.join(process.cwd(), 'datalearnusers.json')
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import fs from 'fs',;'
import path from 'path',;'
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),'
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),
'
const usersPath = path.join(process.cwd(), 'datalearnusers.json')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
function readJson() { return null; }
}
function writeJson(p: string, data: any) {}
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const { userId = 'demo-user', courseId, enableBoost } = req.body |{}
  if (!courseId) return res.status(400).json({ error: 'courseId required' })
  try {
<<<<<<< HEAD
<<<<<<< HEAD
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
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
export default function handler() { return null; }
  }'
  const { userId = 'demo-user', courseId, enableBoost } = req.body |{}'
  if (!courseId) return res.status(400).json({ error: 'courseId required' })
  try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);'
    if (!course) return res.status(404).json({ error: 'Course not found' });

    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId);
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge);'
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost;

    // Mark progress complete;
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) };

    users[userId] = user;
    writeJson(usersPath, users);

    return res.status(200).json({ ok: true, user })
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const users_path = path.join (process.cwd (), 'datalearnusers.json')
const courses_path = path.join (process.cwd (), 'datalearncourses.json')
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
/**
 * read_json - Function description
=======



'
import type { NextApiRequest, NextApiResponse } from 'next','
import fs from 'fs','
import path from 'path','
const users_path = path.join (process.cwd (), 'datalearnusers.json'),'
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
/**;
 * read_json - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function read_json() { return null; }
}

/**
 * write_json - Function description;
 */
function write_json() {}
  fs.writeFileSync (p, JSON.stringify (data, null, 2));
}
export default /**;
 * handler - Function description;
 */
<<<<<<< HEAD
function handler() {
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
  }


  }

}



  }

}

=======
res.set_header ('AllowPOST')
    return res.status (405).end ('Method Not Allowed');
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });

const user = users[userId] || {
      userId,
      name: userId,
      slug: userId,
      certifications: [],
      badges: [],
      boostInSearch: false,
      progress: {},
    };
    if (!user.certifications.includes(courseId))
      user.certifications.push(courseId);
    if (!user.badges.includes(course.certificationBadge))
      user.badges.push(course.certificationBadge);
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost;

    // Mark progress complete
    user.progress[courseId] = {
      completed: true,
      percent: 100,
      completedLessons: (course.lessons || []).map((l: any) => l.id),
    };

    users[userId] = user;
    writeJson(usersPath, users);
    return res.status(200).json({ ok: true, user });
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? 'Failed to complete course' });
  }

}}
    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' })
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
res.set_header ('AllowPOST'),'
    return res.status (405).end ('Method Not Allowed');
  }
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
