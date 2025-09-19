import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const coursesPath = path.join(process.cwd(), 'datalearncourses.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    res.setHeader('AllowPOST');
    return res.status(405).end('Method Not Allowed'),
  }
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed'),}
  try {,
    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),
    const existingIndex = courses.findIndex((c: any) => c.id === body.id),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  try {,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  try {,
    const body = req.body || {};
    const raw = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(raw);
    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (req.method !== 'POST') {,
      res.setHeader('AllowPOST');
      return res.status(405).end('Method Not Allowed');
    }
,
    const body = req.body;
    let courses = [];
    if (fs.existsSync(coursesPath)) {,
      const raw = fs.readFileSync(coursesPath, 'utf8');
      courses = JSON.parse(raw);
    }
,
    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {,
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {,
      courses.push(body);
    }
,
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2)),
    res.status(200).json({ ok: true, course: body ,}),
  } catch (e: any) {,
    res.status(500).json({ error: e?.message ?? 'Failed to save course' ,}),
  }
}
,
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(200).json({ ok: true, course: body ,}),
  } catch (e: any) {,
    res.status(500).json({ error: e?.message ?? 'Failed to save course' ,});
  };
};
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.json({ success: true ,});
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,
}