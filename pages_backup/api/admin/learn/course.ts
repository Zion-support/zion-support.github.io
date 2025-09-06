import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;

const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
main

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')

  }


  try {
import fs from 'fs';
import path from 'path';
  }
  try {

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {
origin/cursor/automate-test-improve-and-merge-code-2533
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

    const body = req.body || {}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)

    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
main
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {
      courses.push(body)
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))

    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  };
};

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    
    res.status(200).json({ ok: true, course: newCourse });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
