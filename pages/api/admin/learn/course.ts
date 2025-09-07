import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
const coursesPath = path.join(process.cwd(), 'datalearncourses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
=======
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  try {
<<<<<<< HEAD
    const body = req.body || {};
    const raw = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(raw);
    
    const newCourse = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    courses.push(newCourse);
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    
    res.status(200).json({ ok: true, course: newCourse });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
=======
    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {
      courses.push(body)
    }
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))
    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
