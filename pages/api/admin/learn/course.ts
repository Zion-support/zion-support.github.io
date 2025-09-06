
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')

  }
  try {

    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)

const coursesPath = path.join(process.cwd(), 'datalearncourses.json');


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body || {},
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const existingIndex = courses.findIndex((c: any) => c.id === body.id),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    if (existingIndex >= 0) {


      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }



<<<<<<< HEAD
=======
=======
    fs.writeFileSync (courses_path, JSON.stringify (courses, null, 2)),
    res.status (200).json ({ ok: true, course: body });
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  }
}
<<<<<<< HEAD



    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
