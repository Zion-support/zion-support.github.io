<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
=======
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  }
  try {

    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
    if (existingIndex >= 0) {
<<<<<<< HEAD
      courses[existingIndex] = { ...courses[existingIndex], ...body }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
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
  try {
    const body = req.body || {},
    const raw = fs.readFileSync (courses_path, 'utf - 8'),
    const courses = JSON.parse (raw),
    const existing_index = courses.find_index ((c: any) => c.id === body.id),
    // Check condition
if ( {) {
  $2
}
      courses[existing_index] = { ...courses[existing_index], ...body }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
      courses.push (body);
    }
<<<<<<< HEAD
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  }
}

=======
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(200).json({ ok: true, course: body });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    fs.writeFileSync (courses_path, JSON.stringify (courses, null, 2)),
    res.status (200).json ({ ok: true, course: body });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to save course' });
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
