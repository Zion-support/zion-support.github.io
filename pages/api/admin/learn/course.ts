<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import fs from 'fs',;'
import path from 'path',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
<<<<<<< HEAD

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }

<<<<<<< HEAD
    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    const body = req.body || {},
=======
export default function handler() { return null; }
  }

  try {}
    const body = req.body || {},'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const existingIndex = courses.findIndex((c: any) => c.id === body.id),
<<<<<<< HEAD
<<<<<<< HEAD
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }

    const body = req.body;
    let courses = [];
    
    if (fs.existsSync(coursesPath)) {
      const raw = fs.readFileSync(coursesPath, 'utf8');
      courses = JSON.parse(raw);
    }

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {


=======
import fs from 'fs';
import path from 'path';
  }
  try {

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

<<<<<<< HEAD
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2)),
=======
=======
>>>>>>> pr-12243
    const body = req.body || {}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)

    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
    if (existingIndex >= 0) {
=======
    if (existingIndex >= 0) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {}
      courses.push(body)
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {'
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  };
<<<<<<< HEAD
<<<<<<< HEAD
};
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


}

    fs.writeFileSync (courses_path, JSON.stringify (courses, null, 2)),
    res.status (200).json ({ ok: true, course: body });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to save course' });
  }
}

=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    
    res.status(200).json({ ok: true, course: newCourse });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
