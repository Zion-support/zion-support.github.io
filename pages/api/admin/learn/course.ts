<<<<<<< HEAD

=======
<<<<<<< HEAD
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  try {

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

=======

=======
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  try {
    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (existingIndex >= 0) {


=======
=======
const coursesPath = path.join(process.cwd(), 'datalearncourses.json');
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const body = req.body || {},
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const existingIndex = courses.findIndex((c: any) => c.id === body.id),
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (existingIndex >= 0) {
<<<<<<< HEAD
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
=======
      courses[existingIndex] = { ...courses[existingIndex], ...body };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    } else {
      courses.push (body);
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======

}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    fs.writeFileSync (courses_path, JSON.stringify (courses, null, 2)),
    res.status (200).json ({ ok: true, course: body });
=======
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))
    res.status(200).json({ ok: true, course: body })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to save course' });
  }
}
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

=======

=======

<<<<<<< HEAD
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2)),
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  };
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
