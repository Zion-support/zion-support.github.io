import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const body = $2;
    const raw = fs.readFileSync($2);
    const courses = JSON.parse($2);
    const existingIndex = $2;
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {
      courses.push(body)
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2)),
    res.status(200).json({ ok: true, course: body})
  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to save course' })
  }
}